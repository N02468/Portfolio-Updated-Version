import React from 'react';
import Profileimage from "../assets/images/Noman.jpg";


const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title" style={{"font-family":"Comic-Neue,cursive","marginTop":"5rem"}}>About Me</h2>
      <div className="about-content">
      <img src={Profileimage} alt="Profile" className="profile-image" />
          <p className="about-description" style={{"font-family":"Comic-Neue,cursive"}}>
          As a passionate and dedicated MERN Stack Developer, I specialize in building modern, efficient, and user-friendly web applications that deliver seamless experiences. With expertise in MongoDB, Express.js, React.js, and Node.js, I craft dynamic solutions tailored to meet both technical and business needs.
          <br />
          <br />
          From designing intuitive user interfaces to implementing robust back-end systems, I thrive in developing full-stack applications that are scalable, secure, and performance-driven. My projects showcase a blend of creativity and functionality, whether it's creating responsive designs, managing databases, or integrating APIs.
          <br />
          <br />
          I stay ahead of the curve by continuously learning and embracing new technologies, ensuring that my work aligns with the latest industry standards. With a commitment to collaboration and problem-solving, I aim to transform innovative ideas into reality, contributing to meaningful digital solutions.
          <br />
          <br />
          Let's connect to discuss how my skills and experience can bring value to your team or project!
        </p>
<div class="whatsapp-container">
            <a href="#" target="_blank" class="whatsapp-rounded-button">
              <i class="ri-whatsapp-fill"></i>
            </a>
          </div>
      </div>
    </div>
  );
};

export default About;
