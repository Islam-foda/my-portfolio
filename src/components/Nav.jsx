import React, { useState, useEffect, useRef } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navUlToggle = useRef(null);

  useEffect(() => {
    const smMenu = document.getElementById("burgerMenu");
    const pageWrapper = document.getElementById("pageWrapper");
    smMenu.addEventListener("click", () => {
      pageWrapper.className = "blur";
    });
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMenuVisible(false);
      }
    };
    const handleKeyPress = (event) => {
      //check if the mouse click is pressed or screen is touched
      if (
        event.type === "touchstart" ||
        (event.type === "mousedown" && event.button === 0)
      ) {
        setIsMenuVisible(false);
      }
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 650) {
        console.log(window.scrollY);
        window.nav.classList.add("hide-nav");
      } else {
        window.nav.classList.remove("hide-nav");
      }
    });
    // window.addEventListener("mousedown", handleKeyPress);
    // window.addEventListener("touchstart", (event) => {
    //   const smMenu = document.getElementById("sm-menu");
    //   if (!smMenu.contains(event.target)) {
    //     console.log("hello");
    //     setIsMenuVisible(false);
    //   }
    // });
    // window.addEventListener("touchstart", handleKeyPress);
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function toggleSmallMenu() {
    setIsMenuVisible(!isMenuVisible);
    window.pageWrapper.style.display = isMenuVisible ? "none" : "flex";
  }

  return (
    <nav id="nav">
      <div id="burgerMenu" onClick={toggleSmallMenu} className="nav-toggle">
        <MdOutlineMenu />

        <ul
          id="sm-menu"
          ref={navUlToggle}
          className="ul-toggle"
          style={{ display: isMenuVisible ? "flex" : "none" }}
        >
          <li className="close">
            <MdClose
              onClick={() => {
                setIsMenuVisible(false);
              }}
            />
          </li>
          <li>
            <a href="#home">home</a>
            <span></span>
          </li>
          <li>
            <a href="#projects">projects</a>
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

        <div id="pageWrapper"></div>
      </div>
      <ul className={"nav-center"} key={1}>
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
      <div className="btn-contain">
        <button className="btn">
          <FaGithub />
        </button>
        <button className="btn">
          <FaLinkedin />
        </button>
      </div>
    </nav>
  );
}
