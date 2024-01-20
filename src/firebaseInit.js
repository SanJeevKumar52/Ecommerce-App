// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz5Fcx1H7YhblOrvtf9qcDbaXaInHQDOU",
  authDomain: "busybuy1-9b458.firebaseapp.com",
  projectId: "busybuy1-9b458",
  storageBucket: "busybuy1-9b458.appspot.com",
  messagingSenderId: "421143435096",
  appId: "1:421143435096:web:15b9c0a7abe6d90192772d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);