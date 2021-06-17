import firebase from "firebase" 

var firebaseConfig = {
    apiKey: "AIzaSyAQ5wYa4IINNfisqEWkBzDPEVSbRnTJi5I",
    authDomain: "cursoreact-44706.firebaseapp.com",
    projectId: "cursoreact-44706",
    storageBucket: "cursoreact-44706.appspot.com",
    messagingSenderId: "516346449634",
    appId: "1:516346449634:web:94e355508dfae69806d8bb",
    measurementId: "G-N71ZEPQ6F1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth=firebase.auth();
  firebase.db=firebase.firestore();
  console.log("Conexion Firebase",firebase.database())

  export default firebase;