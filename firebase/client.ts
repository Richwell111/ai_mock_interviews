import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhryY40SNTMcHRDLOdFmeXvNDq_QhnRY",
  authDomain: "prepwise-27ee6.firebaseapp.com",
  projectId: "prepwise-27ee6",
  storageBucket: "prepwise-27ee6.firebasestorage.app",
  messagingSenderId: "319189311578",
  appId: "1:319189311578:web:2c024a1224cacc2b4e3863",
  measurementId: "G-N6CC790JM7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
