import React from "react";
import "../styles/AboutUs.css";
import coursesImg from "../assets/missionImage.jpg";
import missionImg from "../assets/missionImage.jpg";
import whyChooseUsImg from "../assets/coursesImage.jpg";
import joinUsImg from "../assets/joinImage.jpg";
import mission45 from "../assets/mission45.jpg";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";

const About = () => {
  const navigate = useNavigate();
  const startHandler = () => {
    navigate("/courses");
  };
  return (
    <>
      <div className="about-page">
        {/* Our Mission Section */}
        <section className="section">
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              At VTS, we empower students with **industry-ready skills** in
              programming and full-stack development. Our goal is to make every
              student job-ready with hands-on coding experience.
            </p>
          </div>
          <div className="image-container">
            <img src={mission45} alt="Our Mission" />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section alternate">
          <div className="image-container">
            <img src={whyChooseUsImg} alt="Why Choose Us" />
          </div>
          <div className="content">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>🔹 Project-based learning</li>
              <li>🔹 Experienced mentors</li>
              <li>🔹 Hands-on coding & problem-solving</li>
              <li>🔹 Career guidance & mock interviews</li>
            </ul>
          </div>
        </section>

        {/* Our Courses Section */}
        <section className="section">
          <div className="content">
            <h2>Our Courses</h2>
            <p>
              We offer specialized courses in **Programming Foundations,
              Frontend, Backend, and Full-Stack Development.** Learn from
              scratch and build real projects.
            </p>
          </div>
          <div className="image-container">
            <img src={coursesImg} alt="Our Courses" />
          </div>
        </section>

        {/* Join Us Section */}
        <section className="section alternate">
          <div className="image-container">
            <img src={joinUsImg} alt="Join Us" />
          </div>
          <div className="content">
            <h2>Join Us Today</h2>
            <p>
              Start your journey towards a successful tech career with VTS.
              Enroll today and build the future!
            </p>
            <button className="join-btn" onClick={startHandler}>
              Get Started
            </button>
          </div>
        </section>
      </div>
      <ContactUs />
    </>
  );
};

export default About;
