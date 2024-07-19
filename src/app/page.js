'use client'
import Image from "next/image";
import styles from "./page.module.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import TextField from '@mui/material/TextField';
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6hZIYl5Q0qAAS-Fxl9Fmo9MUG_-cD_S8",
  authDomain: "authsample-de1e5.firebaseapp.com",
  projectId: "authsample-de1e5",
  storageBucket: "authsample-de1e5.appspot.com",
  messagingSenderId: "3734431144",
  appId: "1:3734431144:web:ed4a51ab73ab2ae53e299d"
};





export default function Home() {
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    console.log(auth);
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <div>
          Hello World
        </div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
    </main>
  );
}
