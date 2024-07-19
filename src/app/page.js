'use client'
import Image from "next/image";
import styles from "./page.module.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useEffect, useState } from "react";

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSiginIn, setIsSignIn] = useState(true);
  
  const onToggle = () => {
    setIsSignIn(!isSiginIn);
  }

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
      <div style={{ border:'1px solid black', borderRadius:'5px', paddingTop:'40px', paddingBottom:'40px', 
        paddingLeft:'70px',
        paddingRight:'70px'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:'20px'}}>
          회원가입
        </div>
        <div style={{height:'50px'}}></div>
        <TextField id="outlined-basic" label="이메일" variant="outlined" color="warning"/>
        
        <div style={{height:'20px'}}></div>
        <TextField id="outlined-basic" label="비밀번호" variant="outlined" color="warning"/>
        
        <div style={{height:'50px'}}></div>
        <Button variant="contained" fullWidth>회원가입</Button>
        
        <div style={{height:'50px'}}></div>
        {isSiginIn ? 
        <Button variant="contained" fullWidth onClick={onToggle}>회원가입 하기</Button>
        : <Button variant="contained" fullWidth onClick={onToggle}>로그인 하기</Button>}

      </div>
    </main>
  );
}
