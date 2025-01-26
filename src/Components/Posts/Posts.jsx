import React, { useContext, useEffect, useState } from 'react';
import './Posts.css';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const navigate = useNavigate();
  const {firebase} = useContext(FirebaseContext)
  const {setPostDetails} = useContext(PostContext)
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const snapShot = await firebase.firestore().collection("products").get();
        const allPost = snapShot.docs.map((product)=>{
          return{
            ...product.data(),
            id:product.id
          };
        });
        setProducts(allPost);
      }
      catch(err){
        console.log("Error fetching Products",err); 
      }
    }
    fetchProducts();
  
  },[])

  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product) => {
            return (
              <div
                className="card"
                key={product.id}
                onClick={() => {
                  setPostDetails(product);
                  navigate("/view");
                }}
              >
                <div className="image">
                  <img src={product.url} alt={product.name} />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  
}

export default Posts;
