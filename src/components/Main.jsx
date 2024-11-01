import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export default function Main() {
  return (
    <main className="main" id="home">
      <article className="about-me" id="about">
        <h1>About Me</h1>
        <div className="about-container">
          <span className="left">
            <FaQuoteLeft />
          </span>
          <span className="right">
            <FaQuoteRight />
          </span>
          <p>
            Hi, I&apos;m Islam Foda, a passionate frontend developer with a keen
            interest in learning new technologies. I started my tech journey in
            2014 as a Network Engineer and transitioned to frontend development,
            currently diving deep into ReactJS. I love creating intuitive and
            dynamic user interfaces.
          </p>
        </div>
      </article>
    </main>
  );
}
