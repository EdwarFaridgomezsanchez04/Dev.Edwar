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
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                border: "3px solid #cd5ff8",
                maxWidth: "350px",
                width: "100%",
                height: "auto",
                objectFit: "cover"
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
