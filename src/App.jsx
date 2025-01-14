import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </Router>
    </div>
  );
};

export default App;
