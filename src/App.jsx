import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";

import "./assets/css/index.css";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <Header />

      {isOnePage ? (
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
          <Achievements />
          <Certifications />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      )}
    </>
  );
}
