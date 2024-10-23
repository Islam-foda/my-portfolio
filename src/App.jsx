import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Projects from "./components/Projects";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  return (
    <main>
      <Nav />
      <Header />
      <Projects />
    </main>
  );
}

export default App;
