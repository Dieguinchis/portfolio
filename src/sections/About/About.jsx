import "@/sections/About/about.css";
import Divider from "@/components/Divider/Divider";
import { FaAward, FaMedal } from "react-icons/fa";
import { IoMedalSharp } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";

function About() {
  const certificates = [
    {
      icon: <PiMedalFill />,
      title: "Programación inicial en Python",
      issuer: "Talento Tech",
      year: "2024",
      file: "/certificates/python_certificado.pdf"
    },
    {
      icon: <IoMedalSharp />,
      title: "Front-End JS",
      issuer: "Talento Tech",
      year: "2025",
      file: "/certificates/frontend_js_certificado.pdf"
    },
    {
      icon: <FaMedal />,
      title: "React JS",
      issuer: "Talento Tech",
      year: "2025",
      file: "/certificates/react_js_certificado.pdf"
    },
    {
      icon: <FaAward />,
      title: "Back-End Node JS",
      issuer: "Talento Tech",
      year: "2026"
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="subtitle">
        Sobre <span className="highlight">mí</span>
      </h2>
      <Divider />

      <div className="about-container">
        
        {/* BIOGRAFÍA */}
        <div className="about-bio">
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
        </div>

        {/* CERTIFICADOS */}
        <div className="about-certificates">
          <h3 className="certificates-title">Certificaciones</h3>
          <div className="certificates-grid">
            {certificates.map((cert, index) =>
              cert.file ? (
                <a
                  key={index}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-card"
                >
                  <div className="certificate-icon">{cert.icon}</div>
                  <div className="certificate-info">
                    <h4>{cert.title}</h4>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <span className="certificate-year">{cert.year}</span>
                  </div>
                </a>
              ) : (
                <div key={index} className="certificate-card">
                  <div className="certificate-icon">{cert.icon}</div>
                  <div className="certificate-info">
                    <h4>{cert.title}</h4>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <span className="certificate-year">{cert.year}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;