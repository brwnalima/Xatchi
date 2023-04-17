// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaqAnbhFwsMtAXdvTejeggKgwXCtJiRHc",
  authDomain: "xatchi.firebaseapp.com",
  projectId: "xatchi",
  storageBucket: "xatchi.appspot.com",
  messagingSenderId: "181257297497",
  appId: "1:181257297497:web:c29fcc9233d7598924db48",
  measurementId: "G-C31E8PCZTQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const databaseApp = getFirestore(app)