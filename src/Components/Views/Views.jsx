import React, { useContext, useEffect, useState } from 'react';

import './Views.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function Views() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);
  useEffect(()=>{
    const fetchUserDetails = async ()=>{
      try{
        const {userId} = postDetails;
        const res = await firebase.firestore().collection("users").where("id","==",userId).get();

        res.forEach((doc)=>{
          setUserDetails(doc.data());
        });
      }
      catch(err){
        console.log("error fetching user details",err);
      }
    }
    if(postDetails){
      fetchUserDetails();
    }
  },[postDetails])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
       
      </div>
    </div>
  );
}
export default Views;
