import React from "react";
import "../pages/styles/MobileApp.css";
import appstore from "../../assets/app_store.png";
import playstore from "../../assets/play_store.png";
const MobileApp = () => {
  return (
    <div className="mobileapp">
      <h2>For Better Experience Download Tomato App</h2>
      <div>
        <img src={playstore} alt="" />
        <img src={appstore} alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
