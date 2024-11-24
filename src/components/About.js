import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../animations";
import "../components/styles/About.css";
import me from"../assets/me.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <motion.div className="container" initial="hidden" animate="visible" variants={slideIn}>
        <h2>About Me</h2>
        <div className="about-content">
          <img src={me} alt="Seif Moustafa" />
          <p>
            I'm Seif Moustafa, a passionate Mobile Application Developer from Egypt. I specialize in Flutter for mobile app development, ASP.NET Core for backend development, and React for creating modern frontends.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
