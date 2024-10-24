import React from "react";

export default function Projects({ projects }) {
  const myProjects = projects.map((project) => {
    return (
      <article key={project.id} className="project-card">
        <div className="project-image">
          {" "}
          <img src={project.img} alt={project.title} />
          <span className="dim-screen"></span>
          <button
            className="project-btn"
            onClick={() => (window.location.href = project.projectLink)}
          >
            Live Preview
            {/* <a href={project.projectLink} target="_blank">
            </a> */}
          </button>
        </div>
        <div className="project-info">
          <h3>
            <a href={project.githubLink} target="_blank">
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>
        </div>
      </article>
    );
  });

  return (
    <section id="projects" className="section">
      <h1 className="section-title">Projects</h1>
      {myProjects}
    </section>
  );
}
