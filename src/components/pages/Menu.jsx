import React from "react";
import "../pages/styles/Menu.css";
import { menulist } from "../Images/menulist";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menu1">
        <h4>Explore our menu</h4>
        <span>
          Discover a symphony of flavors with our exquisite culinary creations,
          meticulously prepared to satisfy every palate and leave you craving
          for more.
        </span>
      </div>
      <div className="images">
        {menulist.map((item) => {
          return (
            <div className="items">
              <img src={item.menu_image} alt="" />
              <span>{item.menu_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
