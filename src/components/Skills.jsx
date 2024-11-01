import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
export default function Skills({ isDark }) {
  return (
    <article className={isDark ? "skills" : "main-dark skills"}>
      <h1 className={isDark ? "sec-title" : "skills-dark sec-title"}>Skills</h1>
      <div
        className={isDark ? "skills-container" : "skills-dark skills-container"}
      >
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
