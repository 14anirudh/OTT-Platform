import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  const { logout } = UserAuth();
  const [search, setSearch] = useState(false);
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
  const handleSearch = () => {
    setSearch(!search);
    console.log(search);
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
          <Link to="/movies">
            <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Movies</li>
          </Link>
          {/* <li className={showMediaIcons ? "btnl" : "mobile-menu"}>Sports</li> */}
        </ul>
      </div>

      <div className="d-flex justify-center items-center">
        {/* <input
          type="text"
          className={`btn ${search?"btn-search":"srch" }`}
          placeholder="Search"
        />
        <button className="btn" onClick={handleSearch}>
          <BiSearch size={26} />
        </button> */}

        <button className="btn" onClick={handleLogout}>
          Intermission
        </button>
        <Link to="/favourites">
          <button className="btn">Favourites</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
