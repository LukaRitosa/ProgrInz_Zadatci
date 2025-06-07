// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBi9AywGZjESZ8hqdnm5jE8tPzpAy6pLPA",
  authDomain: "firebse-project-b56fc.firebaseapp.com",
  projectId: "firebse-project-b56fc",
  storageBucket: "firebse-project-b56fc.firebasestorage.app",
  messagingSenderId: "677686200476",
  appId: "1:677686200476:web:112dbeea8bfae33f304559"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 

export { auth, db };