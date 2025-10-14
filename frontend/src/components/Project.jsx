import React from 'react';

// Importing images
import marinaFleetImage from '../assets/images/boat rental upper section.jpg';
import bookParadiseImage from '../assets/images/book paradise.jpg';
import carNationImage from '../assets/images/Car_Nation_Banner.png';
import realEstateImage from '../assets/images/Real_Estate.png';
const Projects = () => {
  const projects = [
    {
      title: 'Marina Fleet',
      link: 'https://imaginative-crostata-ffae7e.netlify.app/',
      image: marinaFleetImage,
    },
    {
      title: 'Book Paradise',
      link: 'https://storied-semifreddo-495f4a.netlify.app/home',
      image: bookParadiseImage,
    },
    {
      title: 'Car Nation',
      link: 'https://carspeedo.netlify.app/',
      image: carNationImage,
    },
    {
      title: 'Real Estate',
      link: 'https://real-estate-flax-one.vercel.app/',
      image: realEstateImage,
    },
  ];
   // 👉 Replace with your actual WhatsApp number (with country code, no "+" sign)
  const whatsappNumber = '923407386534'; // Example: 92 = Pakistan, 3001234567 = your number
  const whatsappMessage = 'Hello! I saw your portfolio and would like to connect.'; // Custom message
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div style={{ padding: '5rem', fontFamily: 'Comic-Neue, cursive' }}>
      <h2 style={{ fontWeight: 'bolder', marginBottom: '2rem' }}>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h1 className="project-title" style={{"font-family":"Comic-Neue,cursive"}}>{project.title}</h1>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {project.link}
            </a>
          </div>
        ))}
      </div>
      <div class="whatsapp-container">
            <a href={whatsappLink} target="_blank" class="whatsapp-rounded-button">
              <i class="ri-whatsapp-fill"></i>
            </a>
          </div>
    </div>
  );
};

export default Projects;
