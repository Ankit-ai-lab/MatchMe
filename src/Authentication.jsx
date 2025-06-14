// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdsxUCXwCEdutXrJHAy1HAWmBa_9MgODc",
  authDomain: "friends-forever-3586f.firebaseapp.com",
  databaseURL: "https://friends-forever-3586f-default-rtdb.firebaseio.com",
  projectId: "friends-forever-3586f",
  storageBucket: "friends-forever-3586f.firebasestorage.app",
  messagingSenderId: "1092070797231",
  appId: "1:1092070797231:web:9e6f5d82f951c2782ac95a",
  measurementId: "G-Q1VW2S35P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);