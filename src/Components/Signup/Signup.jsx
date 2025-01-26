import React, { useState,useContext } from 'react';

import firebase from "firebase/compat/app";

import "firebase/compat/auth"; 

import "firebase/compat/firestore"; 

import Logo from '../../olx-logo.png';

import './Signup.css';

import {FirebaseContext} from '../../store/Context'
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const navigate = useNavigate();
  
  const [username,setUsername]=useState("");
  const [email,setEmail] =useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)

  const handleSubmit =async (e)=>{
      e.preventDefault();
      try{
        const result = await firebase.auth().createUserWithEmailAndPassword(email,password)

        console.log('Created User:', result.user);

        await result.user.updateProfile({displayName:username});


        if(result.user.uid){
          await firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          });
          navigate("/login")
        }
        else{
          console.log("error uid is undefined");
        }
      }
      catch(error){
        console.log("Error during signup:",error.message); 
      }

  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
          <br />
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
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
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
          <button>Signup</button>
        </form>
        <a onClick={()=>navigate("/login")}>Login</a>
      </div>
    </div>
  );
}
