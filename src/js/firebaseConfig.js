// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoJ_7LfOZScGCqJ0BfEAu8Q_j0mBKWVfg",
  authDomain: "eiv-reza-bakery.firebaseapp.com",
  projectId: "eiv-reza-bakery",
  storageBucket: "eiv-reza-bakery.firebasestorage.app",
  messagingSenderId: "396052438316",
  appId: "1:396052438316:web:146ccd71ad0c6b0ebba089",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messagesDatabase = getFirestore(app);

export default app;
