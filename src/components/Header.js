import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../data/dummyData";

const Header = () => {
  const [status, setStatus] = useState(true);

  // If we do not provide dependency array useEffect will run on every render
  // If we  provide empty dependency array useEffect will run on the very first render
  useEffect(() => {
    console.log("Checking useeffect");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
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
            <Link href="#">Cart</Link>
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
