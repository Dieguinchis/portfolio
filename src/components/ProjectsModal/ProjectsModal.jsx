import { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/Button/Button";
import "@/components/ProjectsModal/projects-modal.css";
import GithubIcon from "@/assets/github.svg?react";
import DemoIcon from "@/assets/demo.svg?react";
import Tech from "@/components/ProjectsTechnologies/ProjectsTechnologies";

function ModalProjects({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailPage, setThumbnailPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const THUMBNAILS_PER_PAGE = 5;

  // Reiniciar el índice cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
    setThumbnailPage(0);
  }, [project]);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose, isFullscreen]);

  if (!isOpen || !project) return null;

  // Miniaturas paginadas
  const totalImages = project.images.length;
  const totalPages = Math.ceil(totalImages / THUMBNAILS_PER_PAGE);
  const start = thumbnailPage * THUMBNAILS_PER_PAGE;
  const end = start + THUMBNAILS_PER_PAGE;
  const thumbnailsToShow = project.images.slice(start, end);

  const nextThumbnailPage = () => {
    setThumbnailPage((prev) => (prev + 1) % totalPages);
    setCurrentImageIndex((prev) => {
      const newStart = ((thumbnailPage + 1) % totalPages) * THUMBNAILS_PER_PAGE;
      return newStart;
    });
  };

  const prevThumbnailPage = () => {
    setThumbnailPage((prev) => (prev - 1 + totalPages) % totalPages);
    setCurrentImageIndex((prev) => {
      const newStart = ((thumbnailPage - 1 + totalPages) % totalPages) * THUMBNAILS_PER_PAGE;
      return newStart;
    });
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Pantalla completa
  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = (e) => {
    e.stopPropagation();
    setIsFullscreen(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          <FaTimes />
        </button>

        {/* Contador de imágenes */}
        {totalImages > 1 && (
          <div className="modal-image-counter">
            {currentImageIndex + 1} / {totalImages}
          </div>
        )}

        <div className="modal-body">
          {/* CARRUSEL DE IMÁGENES */}
          <div className="modal-carousel">
            <div className="modal-image-wrapper" style={{ cursor: "zoom-in" }}>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - imagen ${currentImageIndex + 1}`}
                className="modal-image"
                onClick={handleImageClick}
              />
            </div>

            {/* Miniaturas de imágenes + Carrusel de miniaturas */}
            {totalImages > 1 && (
              <div className="modal-thumbnails" style={{ position: "relative" }}>
                {totalImages > THUMBNAILS_PER_PAGE && (
                  <button
                    className="modal-carousel-btn prev"
                    onClick={prevThumbnailPage}
                    aria-label="Página anterior de miniaturas"
                    style={{ left: 0, position: "absolute" }}
                  >
                    <FaChevronLeft />
                  </button>
                )}
                <div style={{ display: "flex", gap: "0.8rem", margin: "0 auto" }}>
                  {thumbnailsToShow.map((image, idx) => {
                    const realIndex = start + idx;
                    return (
                      <button
                        key={realIndex}
                        className={`modal-thumbnail ${realIndex === currentImageIndex ? "active" : ""}`}
                        onClick={() => goToImage(realIndex)}
                        aria-label={`Ir a imagen ${realIndex + 1}`}
                      >
                        <img src={image} alt={`Miniatura ${realIndex + 1}`} />
                        <div className="thumbnail-overlay"></div>
                      </button>
                    );
                  })}
                </div>
                {totalImages > THUMBNAILS_PER_PAGE && (
                  <button
                    className="modal-carousel-btn next"
                    onClick={nextThumbnailPage}
                    aria-label="Siguiente página de miniaturas"
                    style={{ right: 0, position: "absolute" }}
                  >
                    <FaChevronRight />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* INFORMACIÓN DEL PROYECTO */}
          <div className="modal-info">
            <h2 className="modal-title">{project.title}</h2>

            <div className="modal-description">
              <p>{project.Description}</p>
            </div>

            {/* Tecnologías */}
            <div className="modal-section">
              <h3 className="modal-section-title">Tecnologías utilizadas</h3>
              <div className="modal-technologies">
                <Tech technologies={project.technologies} variant="modal" />
              </div>
            </div>

            {/* Botones */}
            <div className="modal-actions">
              <Button
                as="a"
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="code"
              >
                <GithubIcon /> Ver Código
              </Button>
              <Button
                as="a"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="demo"
              >
                <DemoIcon /> Ver Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Pantalla completa */}
        {isFullscreen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.97)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
            }}
            onClick={handleCloseFullscreen}
          >
            <img
              src={project.images[currentImageIndex]}
              alt="Imagen en pantalla completa"
              style={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                borderRadius: "12px",
                boxShadow: "0 0 40px rgba(0,0,0,0.7)",
              }}
            />
            <button
              onClick={handleCloseFullscreen}
              style={{
                position: "fixed",
                top: 20,
                right: 30,
                background: "rgba(0,0,0,0.5)",
                border: "none",
                borderRadius: "50%",
                width: 44,
                height: 44,
                color: "#fff",
                fontSize: 22,
                cursor: "pointer",
                zIndex: 2100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Cerrar pantalla completa"
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalProjects;