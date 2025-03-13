/**
 * This is a mqtt server that is connected to
 * firebase realtime database and reterives id of each new
 * db entry done by sensor nodes, and requests flask based
 * ML server with this id so that flask server can retrieve
 * audio file stored on firebase storage by sensor node for
 * corresponding db entry.
 *
 */

// import dependencies and initialize express
const https = require("https");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

// Provided firebase project admin access
var admin = require("firebase-admin");
// Fetch the service account key JSON file contents
var serviceAccount = require("./secret/firebase-admin-sdk.json");
//Twillio account SID
const accountSid = process.env.TWILLIO_ACCOUNT_SID;
//Twillio account auth token
const authToken = process.env.TWILLIO_AUTH_TOKEN;

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://forest-ai-console.firebaseio.com",
});

//Create Twillio client instance
const client = require("twilio")(accountSid, authToken);

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
// Readv from Raw_Alert DB child
var ref = db.ref("Raw_Alert");
//file to classfy from firebase storage(file is named after the Raw_Alert timestamp)
var fileName = "";

/**
 * Attach an asynchronous callback that
 * retrieve new child as they are added to our firebase database
 */

ref.on("child_added", function (snapshot, prevChildKey) {
  var newAlert = snapshot.val();
  fileName = newAlert.time;
  console.log("location: " + newAlert.location);
  console.log("time: " + newAlert.time);
  console.log("Previous Post ID: " + prevChildKey);
  console.log("Current Post ID: " + snapshot.key);
  console.log("------------------------------");

  //if child added do https get request to ml-server
  https
    .get(
      `https://ml-server.eu-gb.cf.appdomain.cloud/predict?id=${fileName}`,
      (res) => {
        // body for data recieved from above http call
        let body = "";

        res.on("data", (data) => {
          //console.log(data);
          body += data;
        });

        res.on("end", () => {
          result = JSON.parse(body);
          // classfication = 1 means chainsaw
          var classification = result.status;
          console.log(classification);

          //------------------------
          if (classification == 1) {
            console.log("chainsaw detected");

            //Write a logic to move alert, from Raw_Alert to Alert child
            db.ref("Alert").push(newAlert);

            //delete from Raw_Alert child
            let del_ref = db.ref("Raw_Alert/" + snapshot.key);
            del_ref.remove().then(function () {
              console.log("Alert Created");
              console.log("=======================");
            });

            // Twillio api called to send a phone call to user
            client.calls.create(
              {
                twiml:
                  "<Response> <Say voice='alice'> Intrusion detected in your forest! check the forest application</Say>  </Response>",
                to: "+919920985810",
                from: "+12029722199",
              },
              function (err, call) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(call.sid);
                }
              }
            );
          } else {
            //logic to delete the alert
            let del_ref = db.ref("Raw_Alert/" + snapshot.key);
            del_ref.remove().then(function () {
              console.log("Raw alert deleted");
              console.log("=======================");
            });
            return;
          }
        });
      }
    )
    .on("error", (error) => {
      console.error(error.message);
    });
});

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
});

// default path to serve up index.html (single page application)
app.all("", (req, res) => {
  res.status(200).send("server is live");
});

module.exports = app;
