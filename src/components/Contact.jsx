import React from "react";
import "../styles/Contact.css";
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <div className="container text-center">
        <h2 className="section-title">Contact</h2>
        <div className="contact-info">
          <p>
            <FaEnvelope /> Send me an Email:{" "}
            <a href="mailto:doctordhairya@gmail.com">doctordhairya@gmail.com</a>
          </p>
          <p>
            <FaLinkedin /> Connect with me on LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/dhairya-doctor-aab852178/">
              LinkedIn
            </a>
          </p>
          <p>
            <FaInstagram /> Follow me on Instagram:{" "}
            <a href="https://www.instagram.com/dhairya7499/">Instagram</a>
          </p>
          <p>
            <FaGithub /> Check out my GitHub:{" "}
            <a href="https://github.com/DhairyaDoc">GitHub</a>
          </p>
          <p>
            <FaPhone /> Call me: +1 (902)-412-8415
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
