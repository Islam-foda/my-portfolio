import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
// ATTENTION!!!!!!!!!!
import "./Data.js";
import { projects } from "./Data.js";

// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const myProjects = projects.map((project) => {
    return project;
  });
  return (
    <>
      <Header />
      <Main />
      <Projects projects={myProjects} />
    </>
  );
}

export default App;
