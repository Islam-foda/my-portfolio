import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
export default function Skills() {
  return (
    <article className="skills">
      <h1 className="sec-title">My Skills</h1>
      <div className="skills-container">
        <span>
          {" "}
          <FaHtml5 />
        </span>
        <span>
          {" "}
          <FaCss3Alt />
        </span>
        <span>
          <FaJsSquare />
        </span>
        <span>
          {" "}
          <FaReact />
        </span>
        <span>
          {" "}
          <FaNodeJs />
        </span>
        <span>
          {" "}
          <DiMongodb />
        </span>
      </div>
    </article>
  );
}
