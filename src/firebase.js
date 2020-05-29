import * as firebase from 'firebase';


//RAJIV//
// const config = {
//   apiKey: "AIzaSyDEaQypuJEtQq6DqO65TbJyO0BDJY697Uw",
//   authDomain: "apa-272916.firebaseapp.com",
//   databaseURL: "https://apa-272916.firebaseio.com",
//   projectId: "apa-272916",
//   storageBucket: "apa-272916.appspot.com",
//   messagingSenderId: "586606452163",
//   appId: "1:586606452163:web:cce967a4a8e7a443ccb176"
// };

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

// const database = firebase.database();
// const messaging = firebase.messaging();

// messaging.usePublicVapidKey(
//   "BLpZ5SYdjm5t2kjUs4dG9u3iXKBtLlMNuM60LRE0tUFfz6PyhHf-Naj68mWHaXSE7Y1J71aMxrVlCRVjlox5QM0"
// );


// && cra-append-sw ./custom-sw.js
// const askForPermissioToReceiveNotifications = async () => {

//   try {
//     const messaging = firebase.messaging();
//     await messaging.requestPermission();
//     const token = await messaging.getToken();
//     console.log('token', token);

//     return token;
//   } catch (error) {
//     console.error(error);
//   }
// }

// const registerMyServiceWorker = () => {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("./firebase-messaging-sw.js")
//       .then(function (registration) {
//         messaging.useServiceWorker(registration)
//         console.log("Registration successful, scope is:", registration.scope);
//       })
//       .catch(function (err) {
//         console.log("Service worker registration failed, error:", err);
//       });
//   }
// };

export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()
export {
  // database,
  // messaging,
  firebase,
  // askForPermissioToReceiveNotifications,
  // registerMyServiceWorker
};
