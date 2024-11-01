import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer";

import "./Data.js";
import { projects } from "./Data.js";

function App() {
  //functiong Dark mode
  const [isDark, setIsDark] = useState(true);
  function toggleDark() {
    setIsDark(!isDark);
  }

  const myProjects = projects.map((project) => {
    return project;
  });
  return (
    <>
      <Header isDark={isDark} toggleDark={toggleDark} />
      <Main isDark={isDark} />
      <Projects projects={myProjects} isDark={isDark} />
      <Skills isDark={isDark} />
      <Footer />
    </>
  );
}

export default App;
