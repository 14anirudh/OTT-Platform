import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = UserAuth();

  const [show, handleShow] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

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
          <Link to="/tv_shows">
            <li className={showMediaIcons ? "btnl" : "mobile-menu"}>
              Tv shows
            </li>
          </Link>
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Movies</li>
          <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Sports</li>
        </ul>
      </div>

      <div>
        <Link to="/watchlist">
          <button className="btn">
            Watchlist
          </button>
          </Link>
          
          <button className="btn" onClick={handleLogout}>
            Intermission
          </button>
        
          
      </div>
    </div>
  );
}

export default Navbar;
