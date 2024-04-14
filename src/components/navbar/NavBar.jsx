import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img source={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
