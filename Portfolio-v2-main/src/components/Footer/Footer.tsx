import { Container } from './styles';
import reactIcon from '../../assets/react.png'; // פורמט PNG
import linkedin from '../../assets/linkedin.png'; // פורמט PNG
import githubIcon from '../../assets/github.png'; // פורמט PNG
import whatsapp from '../../assets/whatsapp.png'; // פורמט PNG
import telegram from '../../assets/telegram.png'; // פורמט PNG

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/ShaiBatonya" className="logo">
        <span>Shai Gabriel Batonya</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>
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
    </Container>
  );
}
