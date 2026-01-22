import "@/styles/about.css";
import Divider from "@/components/Divider";
import { FaLaptopCode, FaMobileAlt, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-services">
          <div className="about-timeline">
            <span className="dot" />
            <span className="line" />
            <span className="dot" />
            <span className="line" />
            <span className="dot" />
          </div>
          <div className="about-services-list">
            <div className="about-service">
              <FaLaptopCode className="about-icon" />
              <span>Desarrollo de plataformas web escalables</span>
            </div>
            <div className="about-service">
              <FaMobileAlt className="about-icon" />
              <span>Experiencias móviles optimizadas</span>
            </div>
            <div className="about-service">
              <FaRocket className="about-icon" />
              <span>Interfaces de alto rendimiento</span>
            </div>
          </div>
        </div>
        <div className="about-info">
          <h2 className="subtitle">Sobre <span className="highlight">mí</span></h2>
          <Divider />
          <p>
            Me apasiona el desarrollo web y la creación de experiencias digitales funcionales y eficientes. 
            Disfruto transformar ideas en soluciones claras, bien estructuradas y fáciles de usar, cuidando
            cada detalle para lograr resultados sólidos y profesionales.
            Me mantengo en constante aprendizaje y adaptación, con una mentalidad orientada a la mejora continua, 
            la organización y la calidad en cada proyecto.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">120 <span className="about-accent">+</span></span>
              <span className="about-stat-label">Completed<br />Projects</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">95 <span className="about-accent">%</span></span>
              <span className="about-stat-label">Client<br />satisfaction</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">10 <span className="about-accent">+</span></span>
              <span className="about-stat-label">Years of<br />experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
