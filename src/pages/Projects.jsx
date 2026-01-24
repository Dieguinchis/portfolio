import Divider from "@/components/Divider";
import ProjectCards from "@/components/ProjectsCards";
import "@/styles/projects.css";
import { useState } from "react";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Proyectos destacados
  const featuredProjects = [
    {
      id: 1,
      title: "En progreso",
      Description: "Si",
      technologies: ["React"],
      images: ["/projects/portfolio-1.jpg"],
      codeUrl: "https://github.com/tuusuario/portfolio",
      demoUrl: "https://portfolio-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Café Aroma – Landing Page con Reservas Online",
      Description: "Landing page ficticia desarrollada para la cafetería Café Aroma, pensada como proyecto de portafolio.\nEl sitio web está diseñado con un estilo moderno y profesional, incluye múltiples secciones y un formulario de reservas funcional que envía los datos directamente a WhatsApp, simulando un flujo real de atención al cliente.",
      technologies: ["Html", "CSS3", "Javascript"],
      images: [
        "/projects/tasks-1.jpg",
        "/projects/tasks-2.jpg"
      ],
      codeUrl: "https://github.com/tuusuario/task-manager",
      demoUrl: "https://tasks-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "En progreso",
      Description: "Si",
      technologies: ["React"],
      images: ["/projects/portfolio-1.jpg"],
      codeUrl: "https://github.com/tuusuario/portfolio",
      demoUrl: "https://portfolio-demo.com",
      featured: true
    }
  ];

  // Proyectos adicionales
  const additionalProjects = [
    {
      id: 4,
      title: "En progreso",
      Description: "Si",
      technologies: ["React"],
      images: ["/projects/portfolio-1.jpg"],
      codeUrl: "https://github.com/tuusuario/portfolio",
      demoUrl: "https://portfolio-demo.com",
      featured: false
    },
  ];

  const displayedProjects = showAll 
    ? [...featuredProjects, ...additionalProjects] 
    : featuredProjects;

  return (
    <section id="projects" className="projects-section">
      <h2 className="subtitle">
        Mis <span className="highlight">Proyectos</span>
      </h2>
      <Divider />

      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <div className="projects-toggle">
            <button 
              className="btn-toggle-projects"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Ver menos proyectos" : `Ver todos los proyectos (${additionalProjects.length} más)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;