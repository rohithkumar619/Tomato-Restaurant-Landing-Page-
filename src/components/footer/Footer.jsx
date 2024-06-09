import React from "react";
import "../footer/Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="" />
        <span>
          Discover and order from a variety of cuisines with our food app,
          ensuring delicious meals delivered to your doorstep hassle-free,
          anytime, anywhere.
        </span>
      </div>
      <div>
        <h4>COMPANY</h4>
        <span>Home</span>
        <span>About Us</span>
        <span>Delivary</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <h4>GET IN TOUCH</h4>
        <span>9398202266</span>
        <span>brohith619@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
