import "@/sections/Skills/skills.css";
import Divider from "@/components/Divider/Divider";
import { skillCategories } from "@/sections/Skills/skills.data";

// Componente que renderiza el indicador según el tipo
const SkillIndicator = ({ type, color }) => {
  const indicators = {
    component: (
      <div className="indicator-component">
        <svg viewBox="0 0 24 24">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.82 8 12 11.82 5.18 8 12 4.18zM5 9.5l6.5 3.5v7L5 16.5v-7zm8.5 3.5L20 9.5v7l-6.5 3.5v-7z"/>
        </svg>
      </div>
    ),
    
    // Mobile
    mobile: (
      <div className="indicator-mobile">
        <svg viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    
    // Lightning
    lightning: (
      <div className="indicator-lightning">
        <svg viewBox="0 0 24 24">
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
        </svg>
      </div>
    ),
    
    // CSS Styles
    styles: (
      <div className="indicator-styles">
        <span className="bracket">{'{'}</span>
        <span className="bracket">{'}'}</span>
      </div>
    ),
    
    // JavaScript
    js: (
      <div className="indicator-js">
        <span className="arrow-func">=&gt;</span>
      </div>
    ),
    
    // HTML Tag
    html: (
      <div className="indicator-html">
        <span className="tag">&lt;/&gt;</span>
      </div>
    ),
    
    // CSS Selector
    css: (
      <div className="indicator-css">
        <span className="selector">#</span>
      </div>
    ),
    
    // Python
    python: (
      <div className="indicator-python">
        <span className="py-func">print()</span>
      </div>
    ),
    
    // Git Branch
    branch: (
      <div className="indicator-branch">
        <svg viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <line x1="6" y1="9" x2="6" y2="15"/>
          <line x1="6" y1="15" x2="18" y2="15"/>
        </svg>
      </div>
    ),
    
    // Commit
    commit: (
      <div className="indicator-commit">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4"/>
          <line x1="1" y1="12" x2="8" y2="12"/>
          <line x1="16" y1="12" x2="23" y2="12"/>
        </svg>
      </div>
    ),
    
    // Code brackets
    code: (
      <div className="indicator-code">
        <svg viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      </div>
    ),
  };

  return (
    <div className="skill-indicator" style={{ '--indicator-color': color }}>
      {indicators[type] || indicators.code}
    </div>
  );
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="subtitle">
        Mis <span className="highlight">Habilidades</span>
      </h2>
      <Divider />

      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <div className="category-header">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-count">{category.skills.length}</div>
            </div>

            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card"
                  style={{ "--skill-color": skill.color }}
                >
                  <div className="skill-icon-container">
                    <div className="skill-icon">
                      <img src={skill.logo} alt={skill.name} loading="lazy" />
                    </div>
                  </div>

                  <span className="skill-name">{skill.name}</span>

                  <SkillIndicator type={skill.indicator} color={skill.color} />
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