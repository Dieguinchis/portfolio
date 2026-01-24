import { useState, useEffect } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import "@/styles/projectcards.css";

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambia la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  // Ir a una imagen específica al hacer clic en el indicador
  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Función para cortar la descripción
  const truncate = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <div className="project-card">
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
                  className={`indicator ${index === currentImageIndex ? "active" : ""}`}
                  onClick={(e) => goToImage(index, e)}
                  aria-label={`Ir a imagen ${index + 1}`}
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
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="project-actions">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn code-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <FaCode /> Código
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn demo-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;