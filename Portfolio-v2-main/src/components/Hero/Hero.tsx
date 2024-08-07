import { Container } from "./styles";
import profileImage from "../../assets/profileImage.png";
import Hello from '../../assets/Hello.gif';
import linkedin from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import telegram from '../../assets/telegram.png';
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter } from "react-router-dom";
import { HashLink as NavHashLink } from "react-router-hash-link";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Shai Gabriel Batonya</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume"> Full Stack developer that specializes in React, Express, MongoDB, Node.js, AWS, TypeScript, Next.js, Dockers & Kubernetes, CI/CD with the ability to develop educational applications that improve learning processes through gamification.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact Me</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/shaibatonya" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/ShaiBatonya" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://wa.me/0547982775" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="https://t.me/ShaiBatonya" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={profileImage} alt="Shai Gabriel Batonya" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
