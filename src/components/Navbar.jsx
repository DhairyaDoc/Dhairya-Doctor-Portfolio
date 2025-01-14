import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <HashLink className="navbar-brand" to="#about">
          CTRL + D | Dhairya’s Portfolio
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <HashLink className="nav-link" to="#about" onClick={toggleMenu}>
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#skills" onClick={toggleMenu}>
                Skills
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to="#education"
                onClick={toggleMenu}
              >
                Education
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to="#experience"
                onClick={toggleMenu}
              >
                Experience
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                className="nav-link"
                to="#projects"
                onClick={toggleMenu}
              >
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#contact" onClick={toggleMenu}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
