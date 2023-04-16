// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZWBuwaZSFTeRsjqLXLPebMSlt4gAMBw8",
  authDomain: "messenger-app-7b5f1.firebaseapp.com",
  projectId: "messenger-app-7b5f1",
  storageBucket: "messenger-app-7b5f1.appspot.com",
  messagingSenderId: "818019348154",
  appId: "1:818019348154:web:96cabf4d8f6ad2b1491c83",
  measurementId: "G-XLFCMQYG0Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);