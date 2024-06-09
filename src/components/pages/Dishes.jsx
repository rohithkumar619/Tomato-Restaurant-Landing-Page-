import React from "react";
import "../pages/styles/Dishes.css";
import { dishes } from "../Images/dishes";
import rating from "../../assets/rating_starts.png";
import add from "../../assets/add_icon_white.png";
const Dishes = () => {
  return (
    <div className="dishes">
      <h4>Top dishes near you</h4>
      <div className="dishes1">
        {dishes.map((items, i) => {
          return (
            <div className="items2">
              <img src={items.image} alt="" />

              <div>
                <span>{items.name}</span>
                <img src={rating} alt="" />
              </div>
              <span>{items.description}</span>
              <span>{items.price}$</span>
              <div className="add">
                <img src={add} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
