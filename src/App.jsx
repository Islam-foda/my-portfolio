import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Nav from "./components/Nav";
import Header from "./components/Header";
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
    <main>
      <Nav />
      <Header />
      <Projects projects={myProjects} />
    </main>
  );
}

export default App;
