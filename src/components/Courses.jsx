import React from "react";
import "../styles/Courses.css";
import programmingWithDsa from "../assets/programmingWithDsa.jpg";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.jpg";
import fullStack from "../assets/fullStack.jpg";

const courses = [
  {
    title: "Programming Foundation with DSA",
    description:
      "Master Data Structures & Algorithms to crack top tech interviews.",
    image: programmingWithDsa,
  },
  {
    title: "Frontend Developer",
    description:
      "Learn HTML, CSS, JavaScript & React (Web | App) to build amazing UIs.",
    image: frontend,
  },
  {
    title: "Backend Developer",
    description:
      "Master Node.js, Express.js, and databases for scalable web apps.",
    image: backend,
  },
  {
    title: "Full Stack Developer",
    description:
      "Become a complete developer with Frontend, Backend & Databases.",
    image: fullStack,
  },
];

const Courses = () => {
  return (
    <section className="courses">
      <h2 className="section-title">Our Courses</h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="learn-more">Learn More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
