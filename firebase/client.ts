// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnc9kE_U_N6DGikgBVIygf_NYCqXkF1IQ",
  authDomain: "prepwise-ece64.firebaseapp.com",
  projectId: "prepwise-ece64",
  storageBucket: "prepwise-ece64.firebasestorage.app",
  messagingSenderId: "710726397815",
  appId: "1:710726397815:web:b395480a31970eddeafb72",
  measurementId: "G-QYLELQPQYH"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
