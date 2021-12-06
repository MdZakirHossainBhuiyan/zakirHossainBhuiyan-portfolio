import React from "react";
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
