// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAThtL3FG5oSY1_-DQq6cvod0T463-Nwlc",
  authDomain: "iti-final-project0.firebaseapp.com",
  projectId: "iti-final-project0",
  storageBucket: "iti-final-project0.appspot.com",
  messagingSenderId: "590751786816",
  appId: "1:590751786816:web:cc6dbbc1feb8e65dda7ca5",
  measurementId: "G-5N6JRTD2XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);