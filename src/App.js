import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;
