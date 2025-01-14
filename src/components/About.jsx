import React from "react";
import profileImage from "../assets/profile_image.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>
        <div className="about-content d-flex align-items-center">
          <div className="about-image">
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="about-details">
            <p>
              I’m <b>Dhairya Doctor</b>, a Software Developer with a Master’s in
              Applied Computer Science from Dalhousie University. Skilled in
              Java, Python, and React, I have built scalable microservices and
              optimized application performance in fast-paced, collaborative
              environments. Passionate about crafting intuitive, next-gen
              solutions, I enjoy staying at the forefront of technology to
              deliver impactful user experiences. I love to work in teams and
              make meaningful contributions with like-minded people.
            </p>
            <p>
              When I’m not coding, you’ll find me playing soccer (which should
              definitely be called football) or watching YouTube.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
