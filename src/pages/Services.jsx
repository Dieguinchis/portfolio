import "@/styles/services.css";
import React from "react";
import Divider from "@/components/Divider";
import { FaLaptopCode, FaUsers } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";

function Services() {
  return (
    <section className="services" id="services">

      <h2 className="subtitle">
        Mis <span className="highlight">Servicios</span>
      </h2>
      <Divider />

      <div className="services-list">

        <div className="service-item">
          <div className="service-icon">
            <FaLaptopCode size={36} />
          </div>
          <h3>Desarrollo Web</h3>
          <p>Diseño y desarrollo aplicaciones web modernas, funcionales y escalables, enfocadas en rendimiento, usabilidad y buenas prácticas.</p>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <TbLayoutDashboard size={36} />
          </div>

          <h3>Diseño UI/UX</h3>
          <p>Creo interfaces claras, atractivas y fáciles de usar, priorizando la experiencia del usuario, accesibilidad y diseño responsive.</p>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <MdOutlineTouchApp size={36} />
          </div>
          <h3>Experiencias Interactivas</h3>
          <p>Desarrollo funcionalidades interactivas que mejoran la experiencia del usuario y optimizan el funcionamiento de productos digitales.</p>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <FaUsers size={36} />
          </div>
          <h3>Trabajo en Equipo</h3>
          <p>Participo en proyectos colaborativos aplicando buenas prácticas, control de versiones y comunicación efectiva para lograr productos de calidad.</p>
        </div>

      </div>

    </section>
  );
}
export default Services;