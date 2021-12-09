import React from "react";
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Academy from "./Components/Academy/Academy";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="academy" element={<Academy />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="review" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
