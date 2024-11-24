import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../animations";
import "../components/styles/Projects.css";

const Projects = () => {
  const projects = [
    { name: "Foodera", link: "https://github.com/seifmoustafa/foodera" },
    { name: "Read It", link: "https://github.com/seifmoustafa/read_it" },
    { name: "Bookly", link: "https://github.com/seifmoustafa/bookly" },
    { name: "Responsive Dashboard", link: "https://github.com/seifmoustafa/responsive_dash_board" },
    { name: "Chat App", link: "https://github.com/seifmoustafa/chatapp" }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div className="container" initial="hidden" animate="visible" variants={slideIn}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
