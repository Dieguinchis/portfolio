import Divider from "@/components/Divider";
import "@/styles/contact.css";
import Form from "@/components/Form";
import EmailIcon from "@/assets/email.svg?react";
import GithubIcon from "@/assets/github.svg?react";
import LinkedinIcon from "@/assets/linkedin.svg?react";

function Contact() {
  return (
    <section id="contact">
      <h2 className="subtitle">Contacto</h2>
      <Divider />

      <div className="contact-container">
        <div className="contact-info-container">
          <h3 className="contact-info-title">¿Trabajamos juntos?</h3>
          <p className="contact-info">
            Estoy disponible para proyectos freelance o colaboraciones. Si tenés una idea
            o necesitás ayuda con el desarrollo frontend, no dudes en contactarme.
          </p>
          <div className="contact-buttons">
            <a
              href="mailto:diego.colmenares.dev@gmail.com"
              className="contact-btn email"
              aria-label="Enviar email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon style={{ width: 32, height: 32 }} />
            </a>
            <a
              href="https://github.com/Dieguinchis"
              className="contact-btn github"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon style={{ width: 32, height: 32 }} />
            </a>
            <a
              href="#"
              className="contact-btn linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon style={{ width: 32, height: 32 }} />
            </a>
          </div>
        </div>
        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
