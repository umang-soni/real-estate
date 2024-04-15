// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-eststate.firebaseapp.com",
  projectId: "mern-eststate",
  storageBucket: "mern-eststate.appspot.com",
  messagingSenderId: "214399053979",
  appId: "1:214399053979:web:5d31443925c21da824d63e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);