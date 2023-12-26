import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../data/dummyData";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [status, setStatus] = useState(true);
  const {loggedInUser , token} = useContext(UserContext)
  const {cartItems} = useSelector(state => state.cart)
  console.log(cartItems , "cartitem");



  // If we do not provide dependency array useEffect will run on every render
  // If we  provide empty dependency array useEffect will run on the very first render
  useEffect(() => {
    console.log("Checking useeffect");
    
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-0 border">
      <div>
        <img  className="w-[130px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart<span className="absolute top-7">{cartItems.length}</span></Link>
          </li>
          <li>
            <Link>{loggedInUser}</Link>
          </li>
          <li>
            <button className="btn" onClick={() => setStatus((prev) => !prev)}>
              {status ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
