import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCbQI5LE31knRCjVvdU_RyRHD0SbEkvOo",
  authDomain: "prepwise-338b3.firebaseapp.com",
  projectId: "prepwise-338b3",
  storageBucket: "prepwise-338b3.firebasestorage.app",
  messagingSenderId: "1094319796591",
  appId: "1:1094319796591:web:8f64f8735a7fe8812e389a",
  measurementId: "G-ZXX514NT6G",
};
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
