import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          <span className="Logo-letter">V</span>TS
        </h2>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
