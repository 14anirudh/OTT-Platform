import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <div className="hamburger" onClick={() => setShowMediaIcons(!showMediaIcons)}>
        <a href="#" >
        <GiHamburgerMenu />
        </a>
        <p> flickers</p>
      </div>
      <div className="nav">
        <ul className="menu">
          <li className={ showMediaIcons ? "mobile-menu" : "btnl"}>Home</li>
          <li className={ showMediaIcons ? "mobile-menu" : "btnl"}>Tv shows</li>
          <li className={ showMediaIcons ? "mobile-menu" : "btnl"}>Movies</li>
          <li className={ showMediaIcons ? "mobile-menu" : "btnl"}>Sports</li>
        </ul>
      </div>

      <div>
        <button className="btn">Subscribe</button>
        <button className="btn">Log In</button>
      </div>
    </div>
  );
}

export default Navbar;
