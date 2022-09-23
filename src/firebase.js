// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQ1IpBu48iKbfLNwnEqpHrHAr8elD1wY",
  authDomain: "auth-project-2-1f18f.firebaseapp.com",
  projectId: "auth-project-2-1f18f",
  storageBucket: "auth-project-2-1f18f.appspot.com",
  messagingSenderId: "667267886792",
  appId: "1:667267886792:web:47c3a80b794d49fb71fffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);