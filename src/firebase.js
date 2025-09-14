// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider , GithubAuthProvider } from "firebase/auth";
import{ getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADmJOcTLSR44NYHU9F7bPYlOkzHccaS1k",
  authDomain: "project-2-e9d22.firebaseapp.com",
  projectId: "project-2-e9d22",
  storageBucket: "project-2-e9d22.firebasestorage.app",
  messagingSenderId: "680065404666",
  appId: "1:680065404666:web:b972609de5d5523b498343",
  measurementId: "G-X809C0TQR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export {auth, googleProvider , githubProvider};