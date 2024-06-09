import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "../header/Header.css";
import search from "../../assets/search_icon.png";
import basket from "../../assets/basket_icon.png";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [bars, setBars] = useState(false);
  const handleClick = () => {
    setBars(!bars);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <FaBars className="bars" onClick={handleClick} />
      <ul className={`links ${bars ? "visible" : ""}`}>
        <Link to="home" smooth={true}>
          <li>Home</li>
        </Link>
        <Link to="menu" smooth={true}>
          <li>Menu</li>
        </Link>
        <Link to="mobileapp" smooth={true}>
          <li>Mobile App</li>
        </Link>
        <Link to="dishes" smooth={true}>
          <li>Dishes</li>
        </Link>
      </ul>
      <div className="signin">
        <img src={search} alt="" />
        <img src={basket} alt="" />
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Header;
