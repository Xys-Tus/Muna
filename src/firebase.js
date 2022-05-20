// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDjgzchawfR_2fAaWJ1HXkkGEaLT_6FAhk",
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "muna-photo-app.firebaseapp.com",
  projectId: "muna-photo-app",
  storageBucket: "muna-photo-app.appspot.com",
  messagingSenderId: "275576345653",
  appId: "1:275576345653:web:21c2f4ccef21903621cd7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
