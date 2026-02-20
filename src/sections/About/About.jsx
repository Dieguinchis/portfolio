import "@/sections/About/about.css";
import Divider from "@/components/Divider/Divider";
import { certificates } from "@/sections/About/certificate.data";
import { FaAward, FaMedal, FaLaptopCode, FaCheckCircle, FaClock } from "react-icons/fa";
import { IoMedalSharp } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";

const certificateIcons = {
  python: <PiMedalFill />,
  frontend: <IoMedalSharp />,
  react: <FaMedal />,
  backend: <FaAward />
};

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="subtitle">
        Sobre <span className="highlight">mí</span>
      </h2>
      <Divider />

      <div className="about-container">

        {/* BIOGRAFÍA */}
        <div className="about-bio">
          <div className="bio-card">
            {/* Header con Avatar y Título */}
            <div className="bio-header">
              <div className="bio-avatar">
                <FaLaptopCode className="bio-avatar-icon" />
              </div>
              <div className="bio-title-section">
                <h3 className="bio-name">Diego Colmenares</h3>
                <p className="bio-role">Frontend Developer</p>
              </div>
            </div>

            {/* Divisor decorativo */}
            <div className="bio-divider"></div>

            {/* Contenido */}
            <div className="bio-content">
              <p>
                Me apasiona el <span className="highlight">desarrollo web</span> y la creación de
                <span className="highlight"> experiencias digitales</span> funcionales y eficientes.
                Disfruto transformar ideas en <span className="highlight">soluciones claras</span>, bien estructuradas y fáciles de usar, cuidando
                cada detalle para lograr resultados sólidos y profesionales.
              </p>
              <p>
                Me mantengo en constante aprendizaje y adaptación, con una mentalidad orientada a la <span className="highlight">mejora continua</span>,
                la organización y la <span className="highlight">calidad</span> en cada proyecto. Mi objetivo es crear productos que no solo funcionen bien,
                sino que también ofrezcan una <span className="highlight">experiencia memorable</span> para los usuarios.
              </p>
            </div>

            {/* Stats */}
            <div className="bio-stats">
              <div className="bio-stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años</span>
              </div>
              <div className="bio-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Habilidades</span>
              </div>
              <div className="bio-stat">
                <span className="stat-number stat-remote">🌍</span>
                <span className="stat-label">Remoto</span>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICACIONES — TIMELINE */}
        <div className="about-certificates">
          <div className="certificates-header">
            <h3 className="certificates-title">Certificaciones</h3>
            <div className="certificates-count">{certificates.length}</div>
          </div>

          <div className="timeline">
            {certificates.map((cert, index) => {
              const isDone = !!cert.file;
              const content = (
                <div className={`timeline-card ${!isDone ? "disabled" : ""}`}>
                  <div className="timeline-icon">
                    {certificateIcons[cert.icon]}
                  </div>
                  <div className="timeline-info">
                    <h4>{cert.title}</h4>
                    <p className="timeline-issuer">{cert.issuer}</p>
                    <span className="timeline-year">{cert.year}</span>
                  </div>
                  <div className="timeline-status">
                    {isDone
                      ? <FaCheckCircle className="status-done" />
                      : <FaClock className="status-pending" />
                    }
                  </div>
                  {!isDone && (
                    <div className="certificate-badge">En curso</div>
                  )}
                </div>
              );

              return (
                <div key={cert.id} className="timeline-item" style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                  {/* Dot en la línea */}
                  <div className={`timeline-dot ${!isDone ? "dot-pending" : ""}`}></div>

                  {isDone ? (
                    <a href={cert.file} target="_blank" rel="noopener noreferrer" className="timeline-card-wrapper">
                      {content}
                    </a>
                  ) : (
                    <div className="timeline-card-wrapper">
                      {content}
                    </div>
                  )}
                </div>
              );
            })}
            {/* Línea vertical */}
            <div className="timeline-line"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;