import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineMenu,
  MdOutlineNightlight,
  MdOutlineLightMode,
} from "react-icons/md";

export default function Nav({ dark, enableDark }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navUlToggle = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMenuVisible(false);
      }
    };
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        // Change 'Escape' to any key you want to use
        setIsMenuVisible(false);
      }
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 810) {
        console.log(window.scrollY);
        window.nav.style.opacity = "0";
        window.nav.style.display = "none";
      } else {
        window.nav.style.opacity = "1";
        window.nav.style.display = "flex";
      }
    });
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function toggleSmallMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <nav id="nav">
      <div id="burgerMenu" onClick={toggleSmallMenu} className="nav-toggle">
        <MdOutlineMenu />
      </div>
      <ul
        id="sm-menu"
        ref={navUlToggle}
        className="ul-toggle"
        style={{ display: isMenuVisible ? "flex" : "none" }}
      >
        <li>
          <a href="home">home</a>
          <span></span>
        </li>
        <li>
          <a href="projects">projects</a>
          <span></span>
        </li>
        <li>
          <a href="about">about</a>
          <span></span>
        </li>
        <li>
          <a href="contact">contact</a>
          <span></span>
        </li>
      </ul>
      <ul className={dark ? "nav-center dark-nav" : "nav-center"}>
        <li>
          <a href="#home">home</a>
          <span></span>
        </li>
        <li>
          <a href="#projects">projects</a>
          <span></span>
        </li>
        <li>
          <a href="#about">about</a>
          <span></span>
        </li>
        <li>
          <a href="#contact">contact</a>
          <span></span>
        </li>
      </ul>
      <button className="btn" onClick={() => enableDark()}>
        {dark ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
      </button>
    </nav>
  );
}
