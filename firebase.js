import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with your actual config from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDEAPJ0sR0h2yUbTj6U4fdXrP5Rd5UNTds",
  authDomain: "todoapp-7e6ed.firebaseapp.com",
  projectId: "todoapp-7e6ed",
  storageBucket: "todoapp-7e6ed.firebasestorage.app",
  messagingSenderId: "153733309037",
  appId: "1:153733309037:web:73d782f94d20de57301564",
  measurementId: "G-1FJQ1LP6EH",
};

const app = initializeApp(firebaseConfig); // This initializes the Firebase app
const db = getFirestore(app); // Get Firestore database instance

// Export Firestore for use in other files
export { db };
