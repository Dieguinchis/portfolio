import { useState, useEffect } from "react";
import ModalProjects from "@/components/ProjectsModal/ProjectsModal";
import Button from "@/components/Button/Button";
import "./projects-cards.css";
import GithubIcon from "@/assets/github.svg?react";
import DemoIcon from "@/assets/demo.svg?react";
import Tech from "@/components/ProjectsTechnologies/ProjectsTechnologies";
import StarIcon from "@/assets/star.svg?react";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carrusel automático
  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images]);

  const truncate = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text;
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`project-card ${project.featured ? "featured" : ""}`}
        onClick={handleCardClick}
      >
        {/* IMAGEN */}
        <div className="project-image-container">
          {/* ⭐ BADGE DESTACADO (FUERA DEL ELEMENTO QUE SE ESCALA) */}
          {project.featured && (
            <div className="featured-badge">
              <StarIcon className="featured-icon" />
            </div>
          )}

          <div
            className="project-image"
            style={{
              backgroundImage: `url(${project.images[currentImageIndex]})`,
            }}
          >
            {/* Overlay */}
            <div className="project-overlay"></div>

            {/* Indicadores */}
            {project.images.length > 1 && (
              <div className="carousel-indicators">
                {project.images.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Ver más */}
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
            <Tech technologies={project.technologies} variant="card" />
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
