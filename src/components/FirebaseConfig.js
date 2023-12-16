// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgJlBZOY-fHwzp2h5KE4q67SkpBL9gsak",
  authDomain: "patdel-analytics.firebaseapp.com",
  projectId: "patdel-analytics",
  storageBucket: "patdel-analytics.appspot.com",
  messagingSenderId: "690330671527",
  appId: "1:690330671527:web:dc3cbfd2e9358afb93fe82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
