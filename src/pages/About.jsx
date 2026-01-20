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
          <h2>Sobre <span>mí</span></h2>
          <Divider />
          <p>
            Desarrollo interfaces modernas, rápidas y accesibles con React,
            JavaScript y CSS. Me enfoco en crear experiencias limpias y
            profesionales.
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
