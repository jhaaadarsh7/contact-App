// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmy30Bc3vNBUDmwujkl0SJh1p4nkKzXAo",
  authDomain: "vite-contact-e25aa.firebaseapp.com",
  projectId: "vite-contact-e25aa",
  storageBucket: "vite-contact-e25aa.appspot.com",
  messagingSenderId: "279698712288",
  appId: "1:279698712288:web:00a6e1262fe51df03e1285"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app); 