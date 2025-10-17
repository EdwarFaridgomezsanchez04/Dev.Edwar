import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import edwarProfile from "../../Assets/file.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me apasiona la tecnología, el código limpio y crear soluciones que realmente funcionan. 
              Soy Tecnólogo en Análisis y Desarrollo de Software. 🚀
              <br />
              <br />Me desempeño como <strong>Desarrollador de Software</strong>, <strong>Analista de Datos</strong> y soy <strong>Fundador & CEO de Lyvion</strong>.
              <br />
              <br />Tengo experiencia práctica en tecnologías como
              <i>
                <b className="purple"> PHP, Laravel, JavaScript, Python, Django y Flask. </b>
              </i>
              <br />
              <br />
              Mi campo de interés es desarrollar &nbsp;
              <i>
                <b className="purple">Aplicaciones Web Full Stack </b> y
                crear soluciones innovadoras con{" "}
                <b className="purple">
                  tecnologías modernas.
                </b>
              </i>
              <br />
              <br />
              Me encanta aprender constantemente y trabajar con 
              <b className="purple"> Laravel, Django, Flask</b> y
              <i>
                <b className="purple">
                  {" "}
                  Frameworks Modernos de JavaScript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js, Next.js y Flutter</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={edwarProfile} 
                className="img-fluid" 
                alt="Edwar Farid Gómez" 
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                  border: "4px solid #cd5ff8",
                  maxWidth: "300px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Siéntete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EdwarFaridgomezsanchez04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/EdwargoM1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/edwar-farid-gomez-sanchez-9ab07732a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dev.edwar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/573102331487"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
