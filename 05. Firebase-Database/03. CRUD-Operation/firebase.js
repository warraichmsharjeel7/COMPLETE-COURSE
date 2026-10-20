

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getFirestore, doc, setDoc, collection,deleteDoc , addDoc, updateDoc,getDoc, getDocs, query   } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYhpQDUQpEHibKIKMwFHTPIK2EAzcokK8",
    authDomain: "bahria-college.firebaseapp.com",
    projectId: "bahria-college",
    storageBucket: "bahria-college.firebasestorage.app",
    messagingSenderId: "15830937414",
    appId: "1:15830937414:web:cb92dbd02fb9fe82833f47",
    measurementId: "G-JXELP9QXPC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);


export {
  doc, 
  setDoc,
  database,
  collection,
  addDoc,
  updateDoc,
  getDoc ,
  getDocs,
  query,
  deleteDoc 
}
