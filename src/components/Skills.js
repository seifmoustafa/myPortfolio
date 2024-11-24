import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import "../components/styles/Skills.css";

const Skills = () => {
  const skills = [
    "Flutter (Mobile Development)",
    "ASP.NET Core (Backend Development)",
    "React (Frontend Development)",
    "Firebase, Git, SQL"
  ];

  return (
    <section id="skills" className="skills">
      <motion.div className="container" initial="hidden" animate="visible" variants={fadeIn}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
