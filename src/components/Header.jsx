import React from "react";

export default function Header() {
  return (
    <header id="home">
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
        <img src="https://github.com/Islam-foda/my-portfolio/blob/main/src/assets/Islamf.jpg" alt="" />
      </div>
    </header>
  );
}
