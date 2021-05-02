import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBrRj31pktiFMqWhpifSZJYqROHPI5Sq8U",
    authDomain: "todoapp-2cf31.firebaseapp.com",
    databaseURL: "https://todoapp-2cf31-default-rtdb.firebaseio.com",
    projectId: "todoapp-2cf31",
    storageBucket: "todoapp-2cf31.appspot.com",
    messagingSenderId: "1069033336399",
    appId: "1:1069033336399:web:3c272ba458398eb6bfc43a"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;