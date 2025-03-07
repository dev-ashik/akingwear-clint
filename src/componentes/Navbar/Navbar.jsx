import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [ismenuactive, setIsmenuactive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_innercontent pagewidth">
        <div className="navlogo">
          <img src={'https://res.cloudinary.com/dbat8c1bl/image/upload/v1741227158/akingwearLogo_tqc1uo.webp'} alt="Akingwear" />
        </div>
        <ul className="navLinks">
          <li>
            <Link className="navLinks_item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLinks_item" to="/watches">
              Watches
            </Link>
          </li>
          <li>
            <Link className="navLinks_item" to="/aboutus">
              About us
            </Link>
          </li>
          <li>
            <Link className="navLinks_item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar_mobileScreen">
          <GiHamburgerMenu
            className={`menu`}
            onClick={() => setIsmenuactive(!ismenuactive)}
          />

          <div
            className={`navbar_mobileScreen_popup ${ismenuactive && "vigible"}`}
          >
            <div className="navbar_mobileScreen_popup-closeDiv">
              <IoClose
                className={`close`}
                onClick={() => setIsmenuactive(!ismenuactive)}
              />
            </div>

            <ul className="navbar_mobileScreen_navLinks">
              <li>
                <Link
                  className="navLinks_item"
                  onClick={() => setIsmenuactive(!ismenuactive)}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="navLinks_item"
                  onClick={() => setIsmenuactive(!ismenuactive)}
                  to="/watches"
                >
                  Watches
                </Link>
              </li>
              <li>
                <Link
                  className="navLinks_item"
                  onClick={() => setIsmenuactive(!ismenuactive)}
                  to="/aboutus"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="navLinks_item"
                  onClick={() => setIsmenuactive(!ismenuactive)}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
