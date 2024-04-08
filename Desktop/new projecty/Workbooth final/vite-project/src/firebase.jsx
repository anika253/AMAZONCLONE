// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLoaSU8VHHRLgQa5yDFrXjrJgt8pfmAiI",
  authDomain: "workboothfinal.firebaseapp.com",
  projectId: "workboothfinal",
  storageBucket: "workboothfinal.appspot.com",
  messagingSenderId: "326840730027",
  appId: "1:326840730027:web:82be18e5e6def9f08552ee",
  measurementId: "G-HFHSYFWEXB",
  databaseURL:
    "https://workboothfinal-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
