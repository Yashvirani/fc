import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC3g9GBvWTAxbdKui6dLcrcP4cClwqD1r4",
  authDomain: "fb-clone-hacked.firebaseapp.com",
  databaseURL: "https://fb-clone-hacked.firebaseio.com",
  projectId: "fb-clone-hacked",
  storageBucket: "fb-clone-hacked.appspot.com",
  messagingSenderId: "287592291392",
  appId: "1:287592291392:web:2eae5dac164d5e3a2613a5",
  measurementId: "G-LW6L86N2F2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;
