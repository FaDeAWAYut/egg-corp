// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA71Ky3IhDNuHxaoK--3zi7e1a9-7bJTV4",
  authDomain: "eggcorp-ff826.firebaseapp.com",
  projectId: "eggcorp-ff826",
  storageBucket: "eggcorp-ff826.firebasestorage.app",
  messagingSenderId: "93411669241",
  appId: "1:93411669241:web:44f9426658290d67339e28",
  measurementId: "G-S5SVB3L3XR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
