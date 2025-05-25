import React, { useContext, useEffect } from "react";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import ViewPost from "./Pages/ViewPost"
import { AuthContext } from "./store/Context";
import { FirebaseContext } from "./store/Context"; 
import Post from "./store/PostContext";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'


function App(){

  const {setUser} = useContext(AuthContext);

  const {firebase} = useContext(FirebaseContext);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[]);

  return(
    <>
    <Post>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/view" element={<ViewPost/>} />
      </Routes>
     </Router>
     </Post>
    </>
  
  )
}

export default App