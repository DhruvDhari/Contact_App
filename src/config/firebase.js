// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZj4rqhkZf9wxUrOwzBGihyUBYFbgu6E",
  authDomain: "contact-app-3219f.firebaseapp.com",
  projectId: "contact-app-3219f",
  storageBucket: "contact-app-3219f.appspot.com",
  messagingSenderId: "890119769867",
  appId: "1:890119769867:web:8e12bea61e528dd5045c0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);