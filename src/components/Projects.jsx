import React from "react";
import { FaLink } from "react-icons/fa";

export default function Projects({ projects }) {
  const myProjects = projects.map((project) => (
    <article key={project.id} className="project-card">
      <div className="project-image">
        <img src={project.img} alt={project.title} />
        <span className="dim-screen"></span>
        <h2 className="project-btn">
          <a href={project.projectLink} target="_blank">
            View Project
          </a>
        </h2>
      </div>
      <div className="project-info">
        <h3>
          <a href={project.githubLink} target="_blank">
            <FaLink /> {project.title} (Github-link)
          </a>
        </h3>
        <p>{project.description}</p>
      </div>
    </article>
  ));

  return (
    <section id="projects" className="section">
      <h1 className="section-title">Projects</h1>
      <div className="projects">{myProjects}</div>
    </section>
  );
}
