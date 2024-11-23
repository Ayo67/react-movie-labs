// Import required Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgYkWUrmossyKALneqSYxat0b5YEYXuSQ",
  authDomain: "movies-app-aab6b.firebaseapp.com",
  databaseURL: "https://movies-app-aab6b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movies-app-aab6b",
  storageBucket: "movies-app-aab6b.firebasestorage.app",
  messagingSenderId: "289453893483",
  appId: "1:289453893483:web:cabdc74aa00e0d9a0f8e2e",
  measurementId: "G-GMPQ1T9V03"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;