import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_RrYonqQVcqj6sKXbr3lnn-J_QjqoQBg",
  authDomain: "kevin-78dfa.firebaseapp.com",
  projectId: "kevin-78dfa",
  storageBucket: "kevin-78dfa.appspot.com",
  messagingSenderId: "267767358535",
  appId: "1:267767358535:web:87adce5d5c9b202021fd62",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
