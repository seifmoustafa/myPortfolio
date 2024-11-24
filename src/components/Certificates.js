import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import "../components/styles/Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "Mastering Flutter: Responsive UI Design",
      img: "/assets/ResponsiveUI.jpg",
    },
    {
      title: "Deep Dive into Clean Architecture in Flutter",
      img: "/assets/CleanArch.jpg",
    },
    {
      title: "Flutter & Dart Complete Development Course",
      img: "/assets/Flutter.jpg",
    },
    {
      title: "Flutter Advanced Bloc and MVVM Pattern",
      img: "/assets/MVVM.jpg",
    },
    {
      title: "Master Git & GitHub",
      img: "/assets/git.jpg",
    },
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
