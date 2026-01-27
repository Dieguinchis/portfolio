import React from "react";
import "@/components/ProjectsTechnologies/projects-technologies.css";

function ProjectsTechnologies({ technologies, variant = "card" }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className={`tech-container ${variant}`}>
      {technologies.map((tech, idx) => (
        <span key={idx} className={`tech ${variant}`}>
          {tech}
        </span>
      ))}
    </div>
  );
}

export default ProjectsTechnologies;
