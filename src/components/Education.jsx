import React from "react";
import "../styles/Education.css";
import "../styles/styles.css";

const education = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Dalhousie University",
    location: "Halifax, Nova Scotia, Canada",
    year: "2021 - 2023",
    details:
      "Specialized in software development, data structures, and algorithms.",
  },
  {
    degree: "Bachelor of Information and Communication Technology",
    institution: "Gujarat Technological University",
    location: "Ahmedabad, Gujarat, India",
    year: "2016 - 2021",
    details:
      "Focused on computer science fundamentals, programming, and web development.",
  },
];

const Education = () => {
  return (
    <section id="education" className="education py-5">
      <div className="container text-center">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-box">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <h5>{edu.location}</h5>
              <p>{edu.year}</p>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
