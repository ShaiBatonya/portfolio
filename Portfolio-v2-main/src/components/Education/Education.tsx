import React from 'react';
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export const Education: React.FC = () => {
  return (
    <Container id="education">
      <h2>Education</h2>
      <div className="education-list">
        <ScrollAnimation animateIn="fadeInLeft">
          <div className="education-item">
            <div className="education-header">
              <h3>Yaniv Arad - Tech Training Labs</h3>
              <h4>Full-Stack Development</h4>
            </div>
            <span>Oct 2023 - Feb 2024</span>
            <p>
              I specialized in Full-Stack development using technologies such as Redux, Firebase, MERN stack, and AI. The learning experience included both theoretical knowledge and practical projects, bridging the gap between theory and practice. I learned how to build and maintain complex applications efficiently and professionally.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <div className="education-item">
            <div className="education-header">
              <h3>TESI - היחידה ללימודי חוץ - ICCP</h3>
              <h4>Full-Stack Web Development</h4>
            </div>
            <span>May 2022 - Aug 2023</span>
            <p>
              As a Full-Stack Web Development student, I gained hands-on experience through various projects. I specialized in Full-Stack development using JavaScript, Node.js, React, HTML/CSS, MongoDB, and Express Generator. This comprehensive course taught me everything from the basics to meeting industry requirements, with a step-by-step approach that ensured a thorough understanding and application of Full-Stack development skills. Additionally, I conducted advanced cybersecurity exercises, including simulated cyber-attack scenarios and penetration testing using Elta systems, which significantly enhanced my proficiency in identifying vulnerabilities and implementing robust security measures.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
