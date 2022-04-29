import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

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
     <div className="left">
      <button className="btnl">Home</button>
      <button className="btnl">Movies</button>
      <button className="btnl">TV Shows</button>
      <button className="btnl">Kids</button>
      </div>
      <div>
      <button className="btn">Subscribe</button>
      <button className="btn">Log In</button>
      </div>
    </div>
  );
}

export default Navbar;
