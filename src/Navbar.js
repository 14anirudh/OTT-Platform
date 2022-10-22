import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        handleShow(true);
      } else handleShow(false);
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // }; //remove the listerner so you dont call it multiple times
  }, []);

  return (
    <div className={`navbar ${show && "nav_black"}`}>
      <div
        className="hamburger"
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        <GiHamburgerMenu />

        <p className="name"> FLICKERS</p>
      </div>
      <div className="nav">
        <ul className="menu">
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Home</li>
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Tv shows</li>
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Movies</li>
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Sports</li>
        </ul>
      </div>

      <div>
        <Link to="/Subscribe">
          <button className="btn" id="sub">
            Subscribe
          </button>
        </Link>
        <Link to="/Login">
          <button className="btn">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
