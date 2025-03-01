import programmingWithDsa from "./newprogrammingWithDsa.jpg";
import frontend from "./newfrontend.jpg";
import backend from "./newbackend.jpg";
import fullStack from "./newfullStack.jpg";

const coursesData = [
  {
    id: "programming-dsa",
    title: "Programming Foundation with DSA",
    description:
      "Master Data Structures & Algorithms to crack top tech interviews.",
    details: {
      languages: ["C++", "Java"],
      topics: [
        "Data Structures & Algorithms",
        "Problem Solving Strategies",
        "Competitive Programming",
      ],
      platforms: ["LeetCode", "GeeksforGeeks"],
      projects: ["Algorithm Visualizer", "Coding Challenges"],
    },
    image: programmingWithDsa,
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    description: "Learn HTML, CSS, JavaScript & React to build amazing UIs.",
    details: {
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "React Native"],
      topics: [
        "Responsive Web Design",
        "State Management",
        "Component-Based UI",
      ],
      projects: ["Portfolio Website", "Weather Application"],
    },
    image: frontend,
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    description:
      "Master Node.js, Express.js, and databases for scalable web apps.",
    details: {
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Docker",
        "Postman",
        "Git & GitHub",
      ],
      topics: [
        "RESTful APIs",
        "Authentication & Authorization",
        "Microservices Architecture",
      ],
      projects: ["User Authentication System", "API Development"],
    },
    image: backend,
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    description:
      "Become a complete developer with Frontend, Backend & Databases.",
    details: {
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Docker",
        "Git & GitHub",
      ],
      topics: [
        "Full Stack Architecture",
        "API Integration",
        "Deployment Strategies",
      ],
      projects: [
        "Student Attendance System",
        "E-commerce Website",
        "Mock Interview Preparation",
      ],
    },
    image: fullStack,
  },
];

export default coursesData;
