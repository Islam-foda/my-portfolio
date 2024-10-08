import React, {useState, useEffect , useRef } from "react";
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
      if (event.key === 'Escape') { // Change 'Escape' to any key you want to use
        setIsMenuVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  
  
  function toggleSmallMenu() {
    setIsMenuVisible(!isMenuVisible);
  
  }

  return (
    <nav id="nav">
      <div id="burgerMenu" onClick={toggleSmallMenu} className="nav-toggle">
        <MdOutlineMenu   />
      </div>
      <ul 
        id="sm-menu" 
        ref={navUlToggle} 
        className="ul-toggle"
        style={{ display:isMenuVisible ? "flex" : "none" }}>
        <li>
          <a href="home">home</a>
        </li>
        <li>
          <a href="projects">projects</a>
        </li>
        <li>
          <a href="about">about</a>
        </li>
        <li>
          <a href="contact">contact</a>
        </li>
      </ul>
      <ul className={dark ? "nav-center dark-nav" : "nav-center"}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <button className="btn" onClick={() => enableDark()}>
        {dark ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
      </button>
    </nav>
  );
}
