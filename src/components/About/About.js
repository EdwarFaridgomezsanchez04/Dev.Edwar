import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import edwarProfile from "../../Assets/edwar-profile.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conoce Quién <strong className="purple">SOY</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img 
              src={edwarProfile} 
              alt="Edwar Farid Gómez" 
              className="img-fluid" 
              style={{
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(30, 58, 95, 0.4)",
                border: "3px solid #4A90E2",
                maxWidth: "350px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transition: "all 0.5s ease",
                transformStyle: "preserve-3d"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotateY(-10deg) rotateX(5deg) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(74, 144, 226, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(30, 58, 95, 0.4)";
              }}
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong className="purple">Profesionales </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que uso
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
