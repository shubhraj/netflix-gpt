// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCpZt6LszrrN6j-bpnwRWD7OL4lByximI",
  authDomain: "netflixgpt-f2c75.firebaseapp.com",
  projectId: "netflixgpt-f2c75",
  storageBucket: "netflixgpt-f2c75.appspot.com",
  messagingSenderId: "527909566588",
  appId: "1:527909566588:web:d6770b619870cfa553b1f9",
  measurementId: "G-TV849L5GFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();