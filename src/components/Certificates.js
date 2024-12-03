import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import "../components/styles/Certificates.css";
import CleanArch from"../assets/CleanArch.jpg";
import ResponsiveUI from"../assets/ResponsiveUI.jpg";

import Flutter from"../assets/Flutter.jpg";
import MVVM from"../assets/MVVM.jpg";
import git from"../assets/git.jpg";
import GMaps from "../assets/GMaps.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "Mastering Flutter: Responsive UI Design",
      img: ResponsiveUI,
    },
    {
      title: "Deep Dive into Clean Architecture in Flutter",
      img: CleanArch,
    },
    {
      title: "Flutter & Dart Complete Development Course",
      img: Flutter,
    },
    {
      title: "Flutter Advanced Bloc and MVVM Pattern",
      img: MVVM,
    },
    {
      title: "Master Git & GitHub",
      img:git,
    },
    {
      title:"Flutter App Creation: Google Maps Integration Guide [Arabic]",
      img:GMaps,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="certificates" className="certificates">
      <motion.div className="container" initial="hidden" animate="visible" variants={fadeIn}>
        <h2>Certificates</h2>
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="certificate">
              <img src={cert.img} alt={cert.title} />
              <p>{cert.title}</p>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default Certificates;
