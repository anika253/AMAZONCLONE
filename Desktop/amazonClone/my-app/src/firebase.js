// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hR7mAwqui2ztE3mfM-JsdIOdS2tZaFo",
  authDomain: "final1-39e58.firebaseapp.com",
  projectId: "final1-39e58",
  storageBucket: "final1-39e58.appspot.com",
  messagingSenderId: "730865830841",
  appId: "1:730865830841:web:fb4c928cfbbca6c9b8c468",
  measurementId: "G-F5B7Z859ET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get instances of Firebase services after initializing the app
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
