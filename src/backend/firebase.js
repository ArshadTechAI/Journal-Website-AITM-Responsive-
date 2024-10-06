// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getStorage, ref, uploadBytes } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUQn7lXlKvVg4TMKm7ZkHbSmwA953YwDg",
  authDomain: "research-website---aitm.firebaseapp.com",
  projectId: "research-website---aitm",
  storageBucket: "research-website---aitm.appspot.com",
  messagingSenderId: "1095342271007",
  appId: "1:1095342271007:web:c82e46aeb89c299de7832a",
  measurementId: "G-6BB2NBK6Q0"
};

let app, db, storage;

try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

if (app) {
  try {
    db = getFirestore(app);
  } catch (error) {
    console.error("Error initializing Firestore:", error);
    console.error("Firestore error stack:", error.stack); // Add stack trace for detailed info
  }

  try {
    storage = getStorage(app);
  } catch (error) {
    console.error("Error initializing Storage:", error);
    console.error("Storage error stack:", error.stack); // Add stack trace for detailed info
  }
}

export { db, storage,};

