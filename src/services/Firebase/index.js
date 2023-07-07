// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.;
  authDomain: "myappuces.firebaseapp.com",
  projectId: "myappuces",
  storageBucket: "myappuces.appspot.com",
  messagingSenderId: "825670651882",
  appId: "1:825670651882:web:3dc126b1545379411f6c93",
  measurementId: "G-RZFE1LNXVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


