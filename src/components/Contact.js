import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../components/styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1 } },
        }}
      >
        <h2>Contact Me</h2>
        <div className="contact-icons">
          <a
            href="mailto:seif.moustafa516@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/seif-moustafa-60115f/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>

        {/* Support Me Section */}
        <div className="support-me">
          <a
            href="https://buymeacoffee.com/seifmoustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="coffee-button"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              className="coffee-icon"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
