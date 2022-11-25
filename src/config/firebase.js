// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ATUZmGh5ikZji09qb11rJAm8c1cYYgo",
  authDomain: "edshare-348e7.firebaseapp.com",
  projectId: "edshare-348e7",
  storageBucket: "edshare-348e7.appspot.com",
  messagingSenderId: "1005475426712",
  appId: "1:1005475426712:web:5afe490c0209cbcc847bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {app, db, storage}