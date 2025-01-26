import React, { useContext, useState } from 'react';

import {FirebaseContext} from '../../store/Context'

import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore"; 

import Logo from '../../olx-logo.png';

import './Login.css';

import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const {firebase} = useContext(FirebaseContext)

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email,password);
      console.log("user signed in");
      navigate('/');
    }
    catch(err){
      alert("incorrect username or Password");
    }
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate("/signup")} style={{cursor:'pointer'}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
