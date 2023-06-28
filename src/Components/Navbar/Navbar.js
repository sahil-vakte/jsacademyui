import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
    <div className="responsive-logo">
      <div className="navbar-logo">
        <a href="/">JS Academy</a>
      </div>
      <div className="navbar-mobile-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ?  <MdClose/> : <GiHamburgerMenu/> }
      </div>
      </div>
      <ul className={`navbar-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
