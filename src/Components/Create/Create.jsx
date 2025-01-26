import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from "../../store/Context"
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const {firebase}  = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const [name,setName] = useState("");
  const [category,setCategory] = useState("");
  const [price,setPrice] = useState("");
  const[image,setImage] = useState(null);
  const date = new Date();
  const handleSubmit =async ()=>{     
        if(!image){
          alert("please select an image before submitting");
          return;
        }
        try{
          const storageRef = firebase.storage().ref(`/image/${user.uid}/${Date.now()}_${image.name}`);
          const snapShot = await storageRef.put(image);

          const downloadURL = await snapShot.ref.getDownloadURL();
          console.log("file upload successfully",downloadURL);

          await firebase.firestore().collection("products").add({
            name,
            category,
            price,
            url:downloadURL,
            userId:user.uid,
            createdAt: date.toDateString()
          })
          navigate("/");
        }
        catch(err){
          console.log("error occured",err)
          alert("something went wrong");
        }
  }
  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input 
              className="input" 
              type="number" 
              id="price" 
              name="Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              required
             />
            <br />
         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):"null"}></img>
        
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </>
  );
};

export default Create;
