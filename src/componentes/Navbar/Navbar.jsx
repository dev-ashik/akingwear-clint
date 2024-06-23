// import React from 'react';
import { NavLink } from "react-router-dom";
import { AkingwearLogo } from "../../assets/injex";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_innercontent">
        <div className="navlogo">
          <img src={AkingwearLogo} alt="Akingwear" />
        </div>
        <div className="navLinks">
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/">Home</NavLink>

          <a className="navLinks_item" href="">
            Watches
          </a>
          <a className="navLinks_item" href="">
            About us
          </a>
          <a className="navLinks_item" href="">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
