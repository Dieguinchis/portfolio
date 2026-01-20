import React, { useEffect, useState } from "react";
import "@/styles/navbar.css";

const sections = [
  { id: "home", label: "Inicio" },
  { id: "skills", label: "Habilidades" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajusta el offset si tienes navbar fijo
      let currentSection = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div>
        <h1 className="navbar-logo">Mi Portafolio</h1>
      </div>
      <div>
        <ul className="navbar-list">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`navbar-items${
                activeSection === section.id ? " active" : ""
              }`}
            >
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
