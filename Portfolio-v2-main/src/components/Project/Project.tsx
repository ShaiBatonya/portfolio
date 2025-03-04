import React from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Importing project images
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const projectImages = [project5, project4, project2, project1, project3,project6];

const projects = [
  {
    title: "Shopfinity - E-commerce Platform",
    description: "A cutting-edge e-commerce platform delivering a seamless shopping experience with modern web technologies.",
    details: [
        "Client-side developed with React and Styled Components for a visually appealing and interactive user interface.",
        "State management powered by Redux for real-time cart updates and efficient state synchronization.",
        "Advanced product filtering, cart management, and wishlist functionality.",
        "Built with Tailwind CSS for modern and responsive design across all devices.",
        "Optimized for fast performance and a consistent user experience on mobile and desktop.",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "Styled Components"],
    link: "https://github.com/ShaiBatonya/Shopfinity",
    demo: "https://shopfinity-nine.vercel.app/",
},

  {
    title: "EstateExplorer - Real Estate Platform",
    description:
      "A M.E.R.N stack-based property listing application with powerful admin tools.",
    details: [
      "Responsive design with Chakra UI for a clean and modern look.",
      "Comprehensive admin panel for managing listings and user interactions.",
      "Integrated MongoDB database with robust querying capabilities.",
      "Search and filter functionalities for intuitive user experience.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    link: "https://github.com/ShaiBatonya/Real-Estate-MERN-STACK",
    demo: "https://real-estate-mern-stack.vercel.app/",
  },
  {
    title: "GradientStudio - Gradient Exploration Platform",
    description: "A React-based gradient exploration platform for previewing, copying, and integrating stunning gradient styles into projects.",
    details: [
      "Developed using React and TailwindCSS for a sleek and responsive UI.",
      "Features real-time gradient previews for text and background styles.",
      "Enables users to copy TailwindCSS gradient classes for seamless integration.",
      "Built with Vite for fast performance and modern web development experience.",
      "Optimized for responsive design across desktop and mobile devices."
    ],
    tech: ["React", "Vite", "TailwindCSS", "Responsive Design", "UI/UX"],
    link: "https://github.com/ShaiBatonya/GradientStudio",
    demo: "https://gradient-studio.vercel.app/",
  },
  {
    title: "Events Application",
    description:
      "A web application developed to manage events with an intuitive user interface.",
    details: [
      "Client-side developed using React, Chakra UI, HTML, and CSS.",
      "Server-side powered by Express, Node.js, and MongoDB for efficient data handling.",
      "Includes functionalities like adding, editing, deleting, and searching for events.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    link: "https://github.com/ShaiBatonya/patents_server-client",
  },
  {
    title: "Restaurant Management System",
    description:
      "A backend application designed to efficiently manage restaurant operations.",
    details: [
      "Manage clients, dishes, employees, and events effectively.",
      "Relationships modeled to integrate all modules seamlessly.",
      "Server-side developed using Express and Node.js.",
      "Database powered by MongoDB for scalable data storage.",
    ],
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/ShaiBatonya/restaurant_server",
  },

];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={3000}
          transitionTime={1000}
          emulateTouch
        >
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
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub Repository" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="live-demo-button"
                    >
                      Live Demo
                    </a>
                  )}
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
