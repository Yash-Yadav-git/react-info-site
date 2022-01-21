import React from "react";
import "../navBar.css";

const NavBar = () => {
  return (
    <nav>
      <img className="nav-logo" src="./logo192.png" alt="" />
      <p className="nav-logo-text">ReactFacts</p>
      <p className="nav-title">React Project course - 1</p>
    </nav>
  );
};

export default NavBar;
