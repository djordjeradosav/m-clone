import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA11-mtJD7XtZYjefAEghmamDtebsdDeTo",
  authDomain: "messenger-clone-1ea6c.firebaseapp.com",
  databaseURL: "https://messenger-clone-1ea6c.firebaseio.com",
  projectId: "messenger-clone-1ea6c",
  storageBucket: "messenger-clone-1ea6c.appspot.com",
  messagingSenderId: "988188118796",
  appId: "1:988188118796:web:10572ac020a4dda683c329",
  measurementId: "G-YE2PK783LC",
});
const db = firebaseApp.firestore();

export default db;
