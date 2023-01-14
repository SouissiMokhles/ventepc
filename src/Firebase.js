import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLNGNrXuaza9gKokmJoJNZeWi-PIuJsWM",
  authDomain: "megatech-d0dd1.firebaseapp.com",
  projectId: "megatech-d0dd1",
  storageBucket: "megatech-d0dd1.appspot.com",
  messagingSenderId: "921070456016",
  appId: "1:921070456016:web:992119f38258a3bb15a2d5",
  measurementId: "G-T0SGR1SYYP",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;
