import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import student from "../assets/student.png";
import Courses from "../components/courses";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          <span className="Logo-letter">V</span>TS
        </h2>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-title"
          >
            Master <span className="highlight">Software Development</span> with
            VTS
          </motion.h1>
          <p className="hero-text">
            Unlock your potential with expert-led courses in programming,
            full-stack development, and data structures.
          </p>
          <button className="join-btn">Join Now</button>
        </div>
        <div className="hero-image">
          <img src={student} alt="Learning" />
        </div>
      </section>
      <Courses />
    </div>
  );
};

export default HomePage;
