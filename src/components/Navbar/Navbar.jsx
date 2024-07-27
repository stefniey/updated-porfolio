import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav>
      {/* Desktop view */}
      <div className="desktop-menu">
        <div data-aos="fade-down" className="desktop-menu-list">
          <NavLink to="/">
            <img className="logo" src={images.logo} alt="logo" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Project">Works</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile view */}
      <div className={`mobile-menu ${isNavbarOpen ? 'open' : ''}`}>
        <div className="mobile-menu-toggle" onClick={toggleNavbar}>
          <img className="logo" src={images.logo} alt="logo" />
          {/* Hamburger icon */}
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Conditionally render the ul based on isNavbarOpen */}
        {isNavbarOpen && (
          <ul>
            <li>
              <NavLink data-aos="fade-down" to="/Home" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink data-aos="fade-down" to="/About" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink data-aos="fade-down" to="/Project" onClick={closeNavbar}>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink data-aos="fade-down" to="/Contact" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
