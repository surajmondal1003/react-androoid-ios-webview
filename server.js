
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
const cors = require('cors')
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const https = require('https');
const firebase = require("firebase");
const _ = require('lodash');
// INITIAL CONFIG
const port = process.env.PORT || 5002;
const app = express();
dotenv.config();

const config = {
  apiKey: "AIzaSyAHAfgsVndvP8GQQxywwhofCKyb39k0Vig",
  authDomain: "next-door-hub.firebaseapp.com",
  databaseURL: "https://next-door-hub.firebaseio.com",
  projectId: "next-door-hub",
  storageBucket: "next-door-hub.appspot.com",
  messagingSenderId: "809597692036",
  appId: "1:809597692036:web:4164956ad01dcee0e47ad1",
  measurementId: "G-CGFP717Z41"
};

firebase.initializeApp(config);
const myFirestore = firebase.firestore();


// WHITELIST DOMAINS TO CALL THE API
const whitelist = ['http://localhost:3000', 'http://192.168.0.105:3000', 'http://192.168.2.20:5002', 'https://192.168.2.20', 'https://lite.nextdoorhub.com'];

const corsOptions = {
  origin: function (origin, callback) {
    console.log('origin', origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(`Unauthorised access`)
    }
  },
}




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Only allow options for intercept
app.options('/intercept', cors());
// app.use(cors(corsOptions))
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, '/build')));
// app.get('/service-worker.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
// });
app.get('/firebase-messaging-sw.js', function (req, res, next) {
  // res.sendFile(path.resolve('build/firebase-messaging-sw.js'));
  res.sendFile(path.resolve(__dirname, '/build/firebase-messaging-sw.js'));
})
app.get('*', function (req, res, next) {
  res.sendFile(path.resolve('build/index.html'));
});
// app.get('/', (req, res) => res.send('Welcome to the world of intercept'))
app.post('/intercept', cors(corsOptions), (req, res, next) => {
  const requestPayload = req.body;
  let apiUrl = requestPayload.options.isSearch ? process.env.REACT_APP_SEARCH_API_URL : process.env.REACT_APP_API_URL;
  const options = {
    uri: `${apiUrl}${requestPayload.url}`,
    qs: requestPayload.options.params,
    method: requestPayload.options.method,
    body: requestPayload.options.params,
    headers: Object.assign({}, requestPayload.headers, { 'Client-Token': 'ZsPdUgSTQbt26kFiRKG/PQ==', 'Cache-Control': 'no-cache' }),
    json: true,
    resolveWithFullResponse: true
  }
  if (options.method !== 'get') {
    delete options.qs;
  }
  console.log('request', options);
  request(options)
    .then(function (response) {
      console.log('Response', response.statusCode);
      res.status(response.statusCode).send(response.body)
    })
    .catch(function (err) {
      console.log('Error', err.statusCode, err)
      res.status(err.statusCode).json(err)
    });
});

app.post('/get-unread-count', async (req, res, next) => {
  const requestPayload = req.body;
  if (requestPayload.user_id) {
    const currentUserId = requestPayload.user_id
    const users1 = await myFirestore.collection("messages")
      .where("user1_id", "==", parseInt(currentUserId))
      .get()
    const users2 = await myFirestore.collection("messages")
      .where("user2_id", "==", parseInt(currentUserId))
      .get()

    const [usersSnapShotList1, usersSnapShotList2] = await Promise.all([
      users1,
      users2
    ]);

    const usersList1Array = usersSnapShotList1.docs;
    const usersList2Array = usersSnapShotList2.docs;
    const usersArray = _.uniqWith(usersList1Array.concat(usersList2Array), _.isEqual);
    let msgCount = 0;
    let unseenMessagePromises = []
    if (usersArray.length > 0) {
      usersArray.forEach(async element => {
        let sender = null;
        let receiver = null;
        const elemenData = element.data();
        console.log(elemenData)
        if (elemenData.user1_id != currentUserId) {
          sender = elemenData.user2_id;
          receiver = elemenData.user1_id;
        }
        else {
          sender = elemenData.user1_id;
          receiver = elemenData.user2_id;
        }
        console.log(sender)
        unseenMessagePromises.push(myFirestore.collection('messages').doc(elemenData.groupChatId).collection(elemenData.groupChatId)
          .where('isSeen', '==', false).where('idTo', '==', sender).get().then(unseenMessages => {

            if (unseenMessages.docs.length > 0) {
              msgCount += 1;
            }
          })
        )
      })

    }
    Promise.all(unseenMessagePromises).then((data) => {
      console.log(data)
      res.status(200).json({ msgCount })
    })
      .catch((err) => { console.error(err); });

  }
  else {
    res.status(400).json({
      message: 'UserId is Required'
    })
  }
});
//const httpsOptions = {
//key: fs.readFileSync('/opt/certs/example.com.key'),
//cert: fs.readFileSync('/opt/certs/example.com.crt')
//};
//https.createServer(httpsOptions,app).listen(port,()=>{console.log('Server started')});
app.listen(port, '0.0.0.0');

