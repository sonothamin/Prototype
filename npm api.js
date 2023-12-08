// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGtUVxElH3iaBZJQc_NjiYT1zDWz80LjU",
  authDomain: "a-project-bb7b2.firebaseapp.com",
  databaseURL: "https://a-project-bb7b2-default-rtdb.firebaseio.com",
  projectId: "a-project-bb7b2",
  storageBucket: "a-project-bb7b2.appspot.com",
  messagingSenderId: "505561737061",
  appId: "1:505561737061:web:e07500b9bf13adafbba38c",
  measurementId: "G-CFVPMRGRKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);