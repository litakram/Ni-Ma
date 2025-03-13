# data-service
A NodeJS service that acts as bridge between ML-Server &amp; Realtime DB  


## Live demo

You can find a running system to test at

- [Data Server](https://data-service.eu-gb.cf.appdomain.cloud) - Deployed on IBM Cloud


## How to Run !

1. Clone This Repository
2. Make sure you have you have NPM and Node installed, to check type `npm -v` and `node -v` in terminal. It will return version like `6.14.4` or `v10.14.2` if installed. If not then download & install npm & node.
3. Move to forest-console directory on you pc using `cd ./forest-console`
4. Type `npm install` in terminal this will install all required dependencies
5. Open the in the editor and add your required api keys as enironment variables, Use env sample for reference.
6. Type `npm start` to start the app, go to http://localhost:3000 in your browser to see it live.


## Deoloy on IBM Cloud !
1. Install and setup ibmcloud-cli
2. clone this repo and `cd data-service`
3. deploy by `ibmcloud app push`
