import React from 'react';
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import certificate_yaniv_arad from '../../assets/certificate_yaniv_arad.png';
import iccp_certificate from '../../assets/iccp_certificate.png';
import react_udemy from '../../assets/react_udemy.jpg';
import ts_udemy from '../../assets/ts_udemy.jpg';
import nodeJS_udemy from '../../assets/nodeJS_udemy.jpg';

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
      <div className="carousel-container">
        <h3>Certificates</h3>
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={3000} transitionTime={1000} emulateTouch>
          <div>
            <img src={certificate_yaniv_arad} alt="Yaniv Arad - Tech Training Labs" />
            <p className="legend">Yaniv Arad - Tech Training Labs</p>
          </div>
          <div>
            <img src={iccp_certificate} alt="TESI - היחידה ללימודי חוץ - ICCP" />
            <p className="legend">TESI - היחידה ללימודי חוץ - ICCP</p>
          </div>
          <div>
            <img src={react_udemy} alt="React Udemy Course" />
            <p className="legend">React Udemy Course</p>
          </div>
          <div>
            <img src={nodeJS_udemy} alt="nodeJS Course" />
            <p className="legend">nodeJS Udemy Course</p>
          </div>
          <div>
            <img src={ts_udemy} alt="TypeScript Udemy Course" />
            <p className="legend">TypeScript Udemy Course</p>
          </div>
        </Carousel>
      </div>
    </Container>
  );
}
