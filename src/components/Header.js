import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import "../components/styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1>Seif Moustafa</h1>
        <p>Mobile Application Developer | Backend Developer</p>
        <nav>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="certificates" smooth={true} duration={500}>
            Certificates
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
