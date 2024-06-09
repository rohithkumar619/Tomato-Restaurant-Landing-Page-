import React from "react";
import "../src/App.css";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Dishes from "./components/pages/Dishes";
import MobileApp from "./components/pages/MobileApp";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Menu />
      <Dishes />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default App;
