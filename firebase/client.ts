import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAxPwH0cL7LfJS4eMYUr9nf1W0pvYQhrxk",
  authDomain: "prepwise-d300c.firebaseapp.com",
  projectId: "prepwise-d300c",
  storageBucket: "prepwise-d300c.firebasestorage.app",
  messagingSenderId: "455645744283",
  appId: "1:455645744283:web:6ca4a6405dfc06b0168a3e",
  measurementId: "G-89PL20RD5Z"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)