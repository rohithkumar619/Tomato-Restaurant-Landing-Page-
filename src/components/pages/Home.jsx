import React from "react";
import "../pages/styles/Home.css";
import Banner from "../../assets/header_img.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Home = () => {
  const transition = {
    duration: 3,
    type: "spring",
  };
  return (
    <div className="home">
      <motion.div
        initial={{ right: "-100px" }}
        whileInView={{ right: "0px" }}
        transition={transition}
        className="banner"
      >
        <img src={Banner} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: "-50px" }}
        whileInView={{ left: "150px" }}
        transition={transition}
        className="description"
      >
        <h2>Order your favourite food here</h2>
        <span>
          Savor exquisite flavors and indulge in culinary delights at our
          restaurant, where every dish is crafted with passion and expertise to
          tantalize your taste buds and create memorable dining experiences.
        </span>
        <Link to="menu" smooth={true}>
          <button className="b3">View Menu</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
