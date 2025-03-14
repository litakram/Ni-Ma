# Ni-Ma sensor

Ni-Ma Sensor node that sends alerts to Ni-Ma platform

#### Hardware:

1. Particle Argon Dev kit or ESP2866
2. Arduino Electrate Mic
3. Connecting wires

#### Connections:

# ![Circuit](asset/circuit.png?raw=true)

#### Coding environment:

[Online devlopment IDE](https://build.particle.io/build)

#### Particle console webhook setup:

Go to integration section of [particle console](https://console.particle.io/devices) and click on `create webhook` and paste below JSON snippet

```json
{
  "event": "Ni-Ma-live",
  "url": "https://Ni-Ma-console.firebaseio.com/Raw_Alert.json",
  "requestType": "POST",
  "noDefaults": true,
  "rejectUnauthorized": false,
  "headers": {
    "Content-Type": "application/json"
  },
  "query": {
    "auth": "your-firebase-database-auth-key"
  },
  "body": "{\"lat\":{{lat}}, \"long\":{{long}}, \"location\":\"{{loc}}\", \"activity\":\"{{act}}\", \"time\":\"{{tim}}\"}"
}
```
