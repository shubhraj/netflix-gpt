// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1DWjpVL6wb1NqV-WDWSH1rfhXfp-HudE",
  authDomain: "netflixgpt-ee1bd.firebaseapp.com",
  projectId: "netflixgpt-ee1bd",
  storageBucket: "netflixgpt-ee1bd.appspot.com",
  messagingSenderId: "1098367315016",
  appId: "1:1098367315016:web:ead0adf9e12ccdb953fc7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//adding getAuth() here just to avoid calling it everytime for any api
export const auth = getAuth();