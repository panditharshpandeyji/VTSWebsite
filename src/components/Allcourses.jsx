import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Courses.css";
import courses from "../assets/courseData";

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <section className="courses">
      <h2 className="section-title">Our Courses</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              className="learn-more"
              onClick={() => handleCourseClick(course.id)}
            >
              <Link to={`/course/${course.id}`} className="learn-more"></Link>
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
