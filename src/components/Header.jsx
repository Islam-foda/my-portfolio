import React from "react";

export default function Header() {
  return (
    <header>
      <div className="person-info">
        <h1>
          Hi, I&apos;m <span>Islam Foda</span>
        </h1>
        <p>Frontend Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          labore sit ut debitis quos deserunt distinctio sint hic provident
          minima! Officia qui eligendi dicta velit est eius asperiores minus
          quis.
        </p>
      </div>
      <div className="img-contain">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </div>
    </header>
  );
}
