import React, { useState, useEffect, useRef, useMemo } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaAngleDoubleDown,
  FaLaptopCode,
} from "react-icons/fa";

export default function Header({ isDark, toggleDark }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [arrayIndex, setArrayIndex] = useState(0);
  const [index, setIndex] = useState(0);

  //animate job title effect
  useEffect(() => {
    const text = [
      "Frontend developer",
      "Responsive Web Design",
      "Landing page",
    ];
    if (index < text[arrayIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[arrayIndex].charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the delay here for speed
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setArrayIndex((arrayIndex + 1) % text.length);
      }, 2000); // Pause before restarting
      return () => clearTimeout(resetTimeout);
    }
  }, [index, displayedText, arrayIndex]);

  return (
    <header className="header">
      {/* Changed id to className */}
      <nav id="nav" className="nav">
        <span
          className={isDark ? "dark-mode" : "dark-mode dark"}
          aria-label="dark-mode"
        >
          <button onClick={toggleDark} className={isDark ? "" : "dark"}>
            {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
        </span>
      </nav>
      <div className="links">
        <ul>
          <li>
            <span>
              <a
                aria-label="github"
                href="https://github.com/islam-foda"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                aria-label="Linkedin"
                href="https://www.linkedin.com/in/islam-foda/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="name">
        <span className="icon">
          <FaLaptopCode />
        </span>
        <h1>Islam Foda </h1>
        <p id="job-title" className="job-title">
          {displayedText}
        </p>
      </div>

      <div
        id="burgerMenu"
        className="burger-menu"
        onClick={() => setIsMenuVisible(!isMenuVisible)}
      >
        <span
          className={isDark ? "down" : "down dn-dark"}
          aria-label="down"
          onClick={() => {
            //scroll down the page by 200px
            window.scrollBy(0, 500);
          }}
        >
          <FaAngleDoubleDown />
        </span>
      </div>
    </header>
  );
}
