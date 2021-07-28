import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAh-wL6z6htJOTbP-W2Hk_HQi-PcvXTgX4",
  authDomain: "clone-ccc8b.firebaseapp.com",
  projectId: "clone-ccc8b",
  storageBucket: "clone-ccc8b.appspot.com",
  messagingSenderId: "881070142976",
  appId: "1:881070142976:web:9d8eb1e3b729dd2caecae5",
  measurementId: "G-7EG6MH17S4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };