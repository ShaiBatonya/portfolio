import React from 'react';
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importing project images
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';

const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5
];

const projects = [
  {
    title: "EstateExplorer  M.E.R.N Stack Listing Website",
    description: "EstateExplorer Listing Website is a comprehensive web application developed in JavaScript.",
    details: [
      "Comprehensive web application with both server-side and client-side components",
      "Client side developed in: React, Chakra UI, JS, and HTML/CSS for an interactive and visually appealing user experience.",
      "Server side developed using: Express Generator and Node.js offering robust functionality.",
      "Data Base Used: MongoDB.",
      "Includes an admin panel for statistical insights and data management.",
      "Implement secure user authentication and authorization using JSON Web Tokens (JWT).",
      "Allow users to search for properties, view detailed information, and schedule appointments."
    ],
    tech: ["React", "Chakra UI", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/ShaiBatonya/Real-Estate-MERN-STACK"
  },
  {
    title: "Events  Application",
    description: "Events Application is a web application developed in JavaScript.",
    details: [
      "Client-side developed using React, Chakra UI, HTML, and CSS, providing an intuitive user interface.",
      "Server-side powered by Express, Node.js, and MongoDB for efficient data handling.",
      "Enables seamless event management with add, edit, delete functionalities, and search filters."
    ],
    tech: ["React", "Chakra UI", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/ShaiBatonya/patents_server-client"
  },
  {
    title: "Restaurant  Management  System",
    description: "Restaurant Management System is a server-side web application developed to manage various aspects of a restaurant.",
    details: [
      "Manage clients, dishes, employees, and events efficiently.",
      "Model relationships, where each event integrates the rest of the modules.",
      "Server side developed using Express Generator and Node.js for robust functionality.",
      "Data Base Used: MongoDB."
    ],
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/ShaiBatonya/restaurant_server"
  },
  {
    title: " Product  Store  Website",
    description: "Product Store Website is a full-stack web application developed to manage and display products.",
    details: [
      "Client side developed using React, providing a seamless and interactive user experience.",
      "Server side developed using Node.js and Express for robust backend functionality.",
      "Data Base Used: MongoDB.",
      "Includes an intuitive admin panel for easy management and data insights."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://github.com/ShaiBatonya/Products-Website"
  }
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="carousel-container">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={3000} transitionTime={1000} emulateTouch>
          {projectImages.map((image, idx) => (
            <div key={idx}>
              <img src={image} alt={`Project screenshot ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((techItem, idx) => (
                    <li key={idx}>{techItem}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
