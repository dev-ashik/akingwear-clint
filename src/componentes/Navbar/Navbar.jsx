// import React from 'react';
import { Link } from "react-router-dom";
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
          <Link className="navLinks_item" to="/">Home</Link>
          <Link className="navLinks_item" to="/watches">Watches</Link>
          <Link className="navLinks_item" to="/aboutus">About us</Link>
          <Link className="navLinks_item" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
