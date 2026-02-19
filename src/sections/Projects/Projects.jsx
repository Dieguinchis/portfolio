import { useState } from "react";
import Divider from "@/components/Divider/Divider";
import ProjectCards from "@/components/ProjectsCards/ProjectsCards";
import Button from "@/components/Button/Button";
import "@/sections/Projects/projects.css";
import projects from "@/sections/Projects/projects.data";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? [...projects].sort(
        (a, b) => b.featured - a.featured
      )
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects-section">
      <h2 className="subtitle">
        Mis <span className="highlight">Proyectos</span>
      </h2>

      <Divider />

      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.map(project => (
            <ProjectCards
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Botón */}
        {projects.some(p => !p.featured) && (
          <div className="projects-toggle">
            <Button
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? "Ver menos proyectos"
                : "Ver todos los proyectos"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
