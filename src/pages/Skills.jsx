import "@/styles/skills.css";
import Divider from "@/components/Divider";
import { 
  FaPython, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub 
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" }
      ]
    },
    {
      title: "Core Technologies",
      skills: [
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#f3f3f3" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="subtitle">
        Mis <span className="highlight">Habilidades</span>
      </h2>
      <Divider />

      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-card"
                  style={{ '--skill-color': skill.color }}
                >
                  <div className="skill-icon">
                    {skill.icon}
                    <div className="skill-glow"></div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;