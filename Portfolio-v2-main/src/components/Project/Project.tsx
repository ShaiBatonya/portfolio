import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> 
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
              <div className="project-links">
                <a href="https://github.com/ShaiBatonya/Real-Estate-MERN-STACK" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MERN Stack Real Estate Listing Website</h3>
              <p> 
                MERN-stack Real Estate Listing Website is a comprehensive web application developed in JavaScript.
                <ul>
                  <li>Comprehensive web application with both server-side and client-side components</li>
                  <li>Client side developed in: React, Chakra UI, JS, and HTML/CSS for an interactive and visually appealing user experience.</li>
                  <li>Server side developed using: Express Generator and Node.js offering robust functionality.</li>
                  <li>Data Base Used: MongoDB.</li>
                  <li>Includes an admin panel for statistical insights and data management.</li>
                  <li>Implement secure user authentication and authorization using JSON Web Tokens (JWT).</li>
                  <li>Allow users to search for properties, view detailed information, and schedule appointments.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Chakra UI</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title> 
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> 
              </svg>
              <div className="project-links">
                <a href="https://github.com/ShaiBatonya/patents_server-client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> 
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Events Application</h3>
              <p>
                Events Application is a web application developed in JavaScript.
                <ul>
                  <li>Client-side developed using React, Chakra UI, HTML, and CSS, providing an intuitive user interface.</li>
                  <li>Server-side powered by Express, Node.js, and MongoDB for efficient data handling.</li>
                  <li>Enables seamless event management with add, edit, delete functionalities, and search filters.</li>
                </ul>
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Chakra UI</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
