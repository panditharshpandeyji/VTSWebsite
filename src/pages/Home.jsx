import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import student from "../assets/student.png";
import Courses from "../components/Allcourses";
import Navbar from "../components/Navbar";
import ContactUs from "./ContactUs";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleJoinClick = (id) => {
    navigate(`/courses`);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="hero-title"
          >
            Master <span className="highlight">Software Development</span> with
            VTS
          </motion.h1>
          <p className="hero-text">
            Unlock your potential with expert-led courses in programming,
            full-stack development, and data structures.
          </p>
          <button className="join-btn" onClick={handleJoinClick}>
            Join Now
          </button>
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
