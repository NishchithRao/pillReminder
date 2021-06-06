import firebase from "firebase";
import "firebase/firestore";

export const init_firebase = () => firebase.initializeApp({
    apiKey: "AIzaSyBv9mFSr_HXT7seYRrCrROtFQlgRvvy0jE",
  authDomain: "pill-reminder-892f4.firebaseapp.com",
  projectId: "pill-reminder-892f4",
  storageBucket: "pill-reminder-892f4.appspot.com",
  messagingSenderId: "312391370714",
  appId: "1:312391370714:web:06b3d0b5dd831ddff962e3",
  measurementId: "G-6R7PHLT88K"
  });