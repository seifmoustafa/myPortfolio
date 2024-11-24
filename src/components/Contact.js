import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import "../components/styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div className="container" initial="hidden" animate="visible" variants={fadeIn}>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:seif.moustafa516@gmail.com">seif.moustafa516@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/seif-moustafa-60115f/" target="_blank" rel="noopener noreferrer">Seif Moustafa</a></p>
        <p>
          Support Me: <a href="https://buymeacoffee.com/seifmoustafa" target="_blank" rel="noopener noreferrer">
            Buy Me a Coffee
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
