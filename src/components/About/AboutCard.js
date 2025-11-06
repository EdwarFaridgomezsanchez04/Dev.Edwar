import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Edwar Farid Gómez Sánchez </span>
            de <span className="purple"> Colombia.</span>
            <br />
            Soy Tecnólogo en Análisis y Desarrollo de Software, apasionado por crear soluciones innovadoras.
            <br />
            Actualmente me desempeño como <strong>Desarrollador de Software</strong>, <strong>Analista de Datos</strong> y soy <strong>Fundador & CEO de Lyvion</strong>.
            <br />
            Tengo experiencia en desarrollo web Full Stack usando PHP, Laravel, JavaScript, Python, Django y Flask.
            <br />
            <br />
            Aparte de programar, ¡otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Liderar Equipos de Desarrollo
            </li>
            <li className="about-activity">
              <ImPointRight /> Analizar Datos Empresariales
            </li>
            <li className="about-activity">
              <ImPointRight /> Crear Soluciones Innovadoras
            </li>
          </ul>

          <p style={{ color: "#87CEEB" }}>
            "¡Construye soluciones que realmente funcionen!"{" "}
          </p>
          <footer className="blockquote-footer">Edwar Farid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
