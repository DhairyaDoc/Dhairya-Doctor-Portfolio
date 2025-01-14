import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    name: "Feed the Food",
    githubLink: "https://github.com/DhairyaDoc/FeedTheFood",
    details:
      "Feed the Food is a web-based application created using React for the frontend and Node.jsfor the backend, along with AWS services. The application supports three types of users: Normal People, NGOs, and Admins. Normal users can log in to the website to view a list of NGOs that require donations and donate accordingly. NGOs can create profiles, submit credentials to prove their eligibility, and log in to add items they need for donations. Admins are responsible for verifying the legitimacy of NGOs by checking submitted certificates. Once verified, NGOs become visible to all users. This ensures that only legitimate NGOs can request donations, providing a secure and reliable platform for charitable contributions.",
  },
  {
    name: "Halifax Foodie",
    githubLink: "https://github.com/DhairyaDoc/HalifaxFoodie",
    details:
      "Halifax Foodie is an online food delivery system built using a multi-cloud deployment model and Backend-as-a-Service. The application offers customization features and additional services for restaurant owners, while providing limited services to customers. It includes an online virtual assistant that quickly answers queries from registered restaurant owners, customers, or guests. The virtual assistant functionality can be extended to support customer escalation, initiating a chat between a registered customer and a customer service representative in case of delivery or service quality issues. The application is built using React for the frontend, with AWS and GCP services for the backend to ensure a serverless architecture.",
  },
  {
    name: "DistributedDB",
    githubLink: "https://github.com/DhairyaDoc/DistributedDatabase",
    details:
      "Console based application used in which two databases created on two instances of GCP indivdually and make both the database communicate with each other. The menu Driven program includes modules: User Registration, User Login, Write Queries, Export, Data Model, Analytics, Logout",
  },
  {
    name: "IConnect",
    githubLink: "https://github.com/DhairyaDoc/IConnect",
    details:
      "Web application that helps to connect investors(who wants to invest money in ideas) to the ideators(who has ideas and looking for someone to invest in their ideas).",
  },
  {
    name: "The BlingList",
    githubLink: "https://github.com/DhairyaDoc/theblinglistapp",
    details:
      "The Blinglist is an online e-commerce web application designed for purchasing jewelry. Users can browse various types of jewelry and receive personalized recommendations based on our recommendation algorithm. The application is developed using the MERN stack (MongoDB, Express, React, NodeJS), ensuring a robust and efficient platform for both browsing and buying jewelry.",
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section id="projects" className="projects py-5">
      <div className="container text-center">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <h3>{project.name}</h3>
              <button
                className="details-btn"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
              <button
                className="github-btn"
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                View on GitHub
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content show">
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.details}</p>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
