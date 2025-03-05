import React from "react";
import { useParams } from "react-router-dom";
import coursesData from "../assets/courseData";
import "../styles/CourseDetail.css";
import ContactUs from "../pages/ContactUs";

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (
    <>
      <div className="course-detail">
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} />
        <p>{course.description}</p>
        <h3>Topics Covered:</h3>
        <ul>
          {course.details.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
        <h3>Projects:</h3>
        <ul>
          {course.details.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
      <ContactUs />
    </>
  );
};

export default CourseDetail;
