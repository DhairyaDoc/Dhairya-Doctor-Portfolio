import React, { useState } from "react";
import "../styles/Experience.css";
import "../styles/styles.css";

const experiences = [
  {
    position: "IT Developer",
    company: "Canada Revenue Agency",
    location: "Toronto, Ontario, Canada",
    year: "2023 - Present",
    details: [
      "Led a team of 5 developers, managing 6 projects and ensuring 100% on-time delivery with weekly progress reports.",
      "Developed 4 internal web applications using Apache Struts 2, Angular, and Java with MySQL and DB2 as backend database.",
      "Built scalable microservices with Spring Boot, RESTful APIs, and multiple databases to enhance scalability and performance.",
      "Optimized database API performance, cutting query execution time by 40% and reducing user wait time to under 5 seconds.",
      "Enhanced frontend performance by 30% with interactive and reusable Angular User Interfaces components.",
      "Integrated Jenkins pipeline into Struts2 application, automating SonarQube analysis and improving compliance metrics by 25%.",
      "Implemented application business logic using stored procedures to streamline data processing and enhance database efficiency.",
    ],
  },
  {
    position: "Software Development Engineer",
    company: "Ajmera Infotech",
    location: "Ahmedabad, Gujarat, India",
    year: "2020 - 2021",
    details: [
      "Developed RESTful APIs with C#, integrating React frontend and MySQL for efficient user interaction and data management.",
      "Led a team of 6 interns to design and develop .NET-based applications, ensuring adherence to industry best practices.",
      "Optimized storage of user images and files in AWS S3 for body scanning application, reduced storage costs by 50%.",
      "Improved CI/CD pipeline to deploy React frontend and C# backend on Microsoft Azure, increased deployment speed by 20%.",
    ],
  },
];

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    setModalOpen(false);
  };

  return (
    <section id="experience" className="experience py-5">
      <div className="container text-center">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-box">
              <h3>{experience.position}</h3>
              <h4>{experience.company}</h4>
              <p>{experience.year}</p>
              <p>{experience.location}</p>
              <button
                className="details-btn"
                onClick={() => openModal(experience)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content show">
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
            <h3>{selectedExperience.position}</h3>
            <h4>{selectedExperience.company}</h4>
            <ul>
              {selectedExperience.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
