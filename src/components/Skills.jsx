import React, { useState } from "react";
import "../styles/Skills.css";
import "../styles/styles.css";

const skills = {
  "Programming Languages": [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "💾" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "SCSS", icon: "🎨" },
    { name: "PHP", icon: "🐘" },
    { name: "C#", icon: "💻" },
    { name: "ASP.NET", icon: "🌐" },
    { name: "GraphQL", icon: "🔍" },
    { name: "jQuery", icon: "💡" },
  ],
  Frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Angular", icon: "📐" },
    { name: "Express", icon: "🚂" },
    { name: "NodeJS", icon: "🌳" },
    { name: "Spring", icon: "🌱" },
    { name: "Apache Struts", icon: "🛠️" },
    { name: ".NET", icon: "💻" },
    { name: ".NET Core", icon: "💻" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Mongoose", icon: "🐍" },
  ],
  Databases: [
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MS SQL (Microsoft SQL Server)", icon: "💽" },
    { name: "MongoDB", icon: "🍃" },
  ],
  Tools: [
    { name: "IntelliJ IDEA", icon: "🛠️" },
    { name: "Figma", icon: "🎨" },
    { name: "Pandas", icon: "🐼" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "JIRA", icon: "📋" },
    { name: "Confluence", icon: "📚" },
    { name: "Linux", icon: "🐧" },
    { name: "Maven", icon: "📦" },
    { name: "Gradle", icon: "📦" },
    { name: "MySQL Workbench", icon: "🗄️" },
    { name: "Jest", icon: "🧪" },
    { name: "Teamcity", icon: "🏙️" },
    { name: "Jenkins", icon: "🤖" },
    { name: "AWS CLI", icon: "☁️" },
    { name: "Microsoft Office 365", icon: "💼" },
    { name: "Postman", icon: "📬" },
    { name: "Swagger", icon: "📜" },
  ],
  Cloud: [
    { name: "AWS (Amazon Web Services)", icon: "☁️" },
    { name: "GCP (Google Cloud Platform)", icon: "☁️" },
    { name: "Azure", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Heroku", icon: "🚀" },
    { name: "SAAS", icon: "💻" },
  ],
  Concepts: [
    { name: "Agile SCRUM Methodology", icon: "🔄" },
    { name: "Data Structure and Algorithms", icon: "📊" },
    { name: "OOP (Object Oriented Programming)", icon: "🔍" },
    { name: "Test Driven Development", icon: "✅" },
    { name: "Software Development Life Cycle", icon: "🔄" },
    { name: "Database Schema Design", icon: "🗂️" },
    { name: "Relational Database System", icon: "🗄️" },
  ],
};

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setModalOpen(false);
  };

  return (
    <section id="skills" className="skills py-5">
      <div className="container text-center">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.keys(skills).map((category, index) => (
            <div
              key={index}
              className="skill-box"
              onClick={() => openModal(category)}
            >
              <h3>{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content show">
            <h3>{selectedCategory}</h3>
            <div className="modal-body">
              <div className="skills-list">
                {skills[selectedCategory].map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.name}
                    {skill.icon}
                  </div>
                ))}
              </div>
            </div>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
