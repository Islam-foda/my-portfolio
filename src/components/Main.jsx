import React from "react";
import { FaChevronUp } from "react-icons/fa";
export default function Main() {
  return (
    <main className="main" id="home">
      <div className="person-info">
        <h1>
          Hi, I&apos;m <span>Islam Foda</span>
        </h1>
        <p className="job-title">Frontend Developer</p>
        <p className="description">
          Passionate and ambitious <span>Frontend Developer</span> with a keen
          interest in learning new technologies. Currently diving into ReactJS,
          I began my tech journey in 2014 as a Network Engineer. Now, I am
          actively seeking opportunities to leverage my skills and grow as a{" "}
          <span>frontend developer</span>.
        </p>
      </div>
      <div className="img-contain">
        <img
          src="https://res.cloudinary.com/dmh8izmhg/image/upload/v1730014035/prndrqcnq46hbxunvpzc.jpg"
          sizes="(max-width: 600px) 400px, 800px"
          alt=""
        />
      </div>
      <span className="up">
        <a href="#home">
          <i id="top">
            <FaChevronUp />
          </i>
        </a>
      </span>
    </main>
  );
}
