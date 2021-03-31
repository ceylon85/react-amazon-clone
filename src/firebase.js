import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwX7hhzIhjdz0t8CyFgToc2WVOeZLHj1c",
  authDomain: "clone-bc826.firebaseapp.com",
  databaseURL: "https://clone-bc826.firebaseio.com",
  projectId: "clone-bc826",
  storageBucket: "clone-bc826.appspot.com",
  messagingSenderId: "1053476447527",
  appId: "1:1053476447527:web:d9180a21cd0355468df502",
  measurementId: "G-YF0BH9TCD5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
