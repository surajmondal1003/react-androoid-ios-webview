// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js');


firebase.initializeApp({
  apiKey: "AIzaSyAHAfgsVndvP8GQQxywwhofCKyb39k0Vig",
  authDomain: "next-door-hub.firebaseapp.com",
  databaseURL: "https://next-door-hub.firebaseio.com",
  projectId: "next-door-hub",
  storageBucket: "next-door-hub.appspot.com",
  messagingSenderId: "809597692036",
  appId: "1:809597692036:web:4164956ad01dcee0e47ad1",
  measurementId: "G-CGFP717Z41"
});



// firebase.initializeApp({
//   apiKey: "AIzaSyDEaQypuJEtQq6DqO65TbJyO0BDJY697Uw",
//   authDomain: "apa-272916.firebaseapp.com",
//   databaseURL: "https://apa-272916.firebaseio.com",
//   projectId: "apa-272916",
//   storageBucket: "apa-272916.appspot.com",
//   messagingSenderId: "586606452163",
//   appId: "1:586606452163:web:cce967a4a8e7a443ccb176"
// });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   return self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });


// self.addEventListener('notificationclick', function (event) {
//   console.log('notification clicked');

// });