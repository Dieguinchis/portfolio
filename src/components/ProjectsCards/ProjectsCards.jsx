import { useState, useEffect } from "react";
import ModalProjects from "@/components/ProjectsModal/ProjectsModal";
import Button from "@/components/Button/Button";
import "./projects-cards.css";
import GithubIcon from "@/assets/github.svg?react";
import DemoIcon from "@/assets/demo.svg?react";
import Tech from "@/components/ProjectsTechnologies/ProjectsTechnologies";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  // Función para cortar la descripción
  const truncate = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  // Abrir modal al hacer clic en la card
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="project-card" onClick={handleCardClick}>
        {/* IMAGEN CON INDICADORES */}
        <div className="project-image-container">
          <div
            className="project-image"
            style={{
              backgroundImage: `url(${project.images[currentImageIndex]})`,
            }}
          >
            {/* Overlay oscuro */}
            <div className="project-overlay"></div>

            {/* Indicadores */}
            {project.images.length > 1 && (
              <div className="carousel-indicators">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    aria-label={`Imagen ${index + 1}`}
                    tabIndex={-1}
                  />
                ))}
              </div>
            )}


            {/* Ver más overlay */}
            <div className="view-more-overlay">
              <span className="view-more-text">Ver más</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">
            {truncate(project.Description, 120)}
          </p>

          {/* Tecnologías */}
          <div className="project-technologies">
            <Tech technologies={project.technologies}
            variant="card" />
          </div>

          {/* Botones */}
          <div className="project-buttons">
            <Button
              as="a"
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="code"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon /> Código
            </Button>
            <Button
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="demo"
              onClick={(e) => e.stopPropagation()}
            >
              <DemoIcon /> Demo
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <ModalProjects
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default ProjectCard;