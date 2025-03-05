import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>VTS</h2>
          <p>
            Vidhyadham Top Skills (VTS) is dedicated to providing top-notch
            programming education with a practical approach.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: harsh4105pandey@gmail.com</p>
          <p>Phone: +91 6268766120</p>
          <p>Location: Indore (M.P)</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} VTS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
