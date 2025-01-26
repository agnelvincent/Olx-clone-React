import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
   const {user} = useContext(AuthContext);
   const {firebase} = useContext(FirebaseContext);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" placeholder='India'/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#fff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>!user && navigate("/login")} style={{cursor:"pointer"}}>{user ? `Welcome ${user.displayName}` : "Login"}</span>
          {!user && <hr />}
        </div>
       {user && <span onClick={()=>{
          firebase.auth().signOut();
          navigate("/login");
       }} style={{cursor:"pointer"}}>Logout</span>} 

        <div className="sellMenu" onClick={()=>{
          if(user){
            navigate("/create")
          }
          else{
            navigate("/login")
          }
        }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
