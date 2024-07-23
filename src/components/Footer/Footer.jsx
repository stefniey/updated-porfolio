import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import images from "../../constants/images";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">

        {/* logo */}
        <div>
          <NavLink to="/">
            <img className="logos" src={images.logo} />
          </NavLink>
        </div>

        {/* links */}
        <div className="tags">
          <div className="links">
            <ul>
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Works">Works</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* rights */}
          <div className="p">
            <p className="copy">©2024 Stephanie Alor. All rights Reserved</p>
          </div>

        </div>

        {/* icons */}
        <div className="fa-icons">
          <a href="https://github.com/stefniey">
            <FaGithub size={23} style={{ color: "#000" }} />
          </a>

          <a href="https://www.linkedin.com/in/stephanie-alor-1b913624a/">
            <FaLinkedin size={23} style={{ color: "#000" }} />
          </a>

          <a href="mailto:stephaniealor7@gmail.com">
            <MdEmail size={23} style={{ color: "#000" }} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
