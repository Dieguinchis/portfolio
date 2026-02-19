const projects = [
  {
    id: 1,
    title: "CPA Refrigeración - Panel de Control + App Mobile",
      Description: "Sistema integral con aplicación móvil y panel de administración web para técnicos de refrigeración. Permite gestionar visitas técnicas, monitorear el estado de equipos, registrar incidencias y generar reportes operativos. Fui responsable del desarrollo frontend de la plataforma, implementando la estructura visual, estilos, componentes reutilizables y una experiencia de usuario clara y responsive. Trabajé en colaboración con un desarrollador full stack para integrar las interfaces con la lógica del sistema, asegurando una navegación fluida, consistencia visual y buena usabilidad en distintos dispositivos.",
      technologies: ["React", "CSS3", "React Native", "PHP", "MySQL"],
      images: ["/projects/portfolio-1.jpg"],
      codeUrl: "https://github.com/tuusuario/portfolio",
      demoUrl: "https://portfolio-demo.com",
    responsive: false,
    featured: true
  },
  {
    id: 2,
    title: "Café Aroma - Landing Page con Reservas Online",
      Description: "Landing page ficticia desarrollada para la cafetería Café Aroma, pensada como proyecto de portafolio. El sitio web está diseñado con un estilo moderno y profesional, incluye múltiples secciones y un formulario de reservas funcional que envía los datos directamente a WhatsApp, simulando un flujo real de atención al cliente.",
      technologies: ["HTML5", "CSS3", "Javascript"],
      images: [
        "/projects/cafe_aroma/screen-1.png",
        "/projects/cafe_aroma/screen-2.png",
        "/projects/cafe_aroma/screen-3.png",
        "/projects/cafe_aroma/screen-4.png",
        "/projects/cafe_aroma/screen-5.png"
      ],
      codeUrl: "https://github.com/Dieguinchis/cafe-aroma-landing",
      demoUrl: "https://tasks-demo.com",
    responsive: true,
    featured: true
  },
  {
    id: 3,
    title: "En progreso",
    Description: "Si",
    technologies: ["React"],
    images: ["/projects/portfolio-1.jpg"],
    responsive: false,
    featured: true
  },
  {
    id: 4,
    title: "Otro proyecto",
    Description: "Proyecto adicional no destacado.",
    technologies: ["React", "CSS3"],
    images: ["/projects/portfolio-1.jpg"],
    responsive: false,
    featured: false
  }
];

export default projects;
