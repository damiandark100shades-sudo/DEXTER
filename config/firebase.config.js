// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dexter-b14eb.firebaseapp.com",
  projectId: "dexter-b14eb",
  storageBucket: "dexter-b14eb.firebasestorage.app",
  messagingSenderId: "236936628408",
  appId: "1:236936628408:web:4fef589185f18606164c4d",
  measurementId: "G-1HBBSVKRYF"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage};