import React from 'react';
import { Container } from "./styles";
import profileImage from "../../assets/shai3.jpg";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import mongodbIcon from "../../assets/mongodb.png";
import awsIcon from "../../assets/aws.png";
import dockerIcon from "../../assets/docker.png";
import kubernetesIcon from "../../assets/kubernetes.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <div className="content">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p>
              Responsibility ⚖   Productivity 💼   Ambition 🚀<br />
              These are not just principles. <br />
              These are personal commitments that shape every action and decision I make.  ✨<br />
              I firmly believe that one can succeed and create a positive impact with these values.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
            <p>
              Hi there! I'm <strong> Shai  Gabriel  Batonya </strong>, an experienced Full Stack developer specializing in React, Node.js, MongoDB, AWS, Docker & Kubernetes, and CI/CD procedures. I have a proven track record in developing educational applications that improve learning processes through gamification.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills :</h3>
          <div className="skills">
            <img src={reactIcon} alt="React" className="skill-icon"/>
            <img src={nodeIcon} alt="Node.js" className="skill-icon"/>
            <img src={mongodbIcon} alt="MongoDB" className="skill-icon"/>
            <img src={awsIcon} alt="AWS" className="skill-icon"/>
            <img src={dockerIcon} alt="Docker" className="skill-icon"/>
            <img src={kubernetesIcon} alt="Kubernetes" className="skill-icon"/>
          </div>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={profileImage} alt="Shai Gabriel Batonya" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}