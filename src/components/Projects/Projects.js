import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flotax from "../../Assets/Projects/flotax.png";
import radio from "../../Assets/Projects/radio.png";
import radioapp from "../../Assets/Projects/radioapp.png";
import vitaliza from "../../Assets/Projects/vitaliza.png";
import jeapost from "../../Assets/Projects/jeapost.png";
import lavete from "../../Assets/Projects/lavete.png";
import motoracer from "../../Assets/Projects/motoracer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong> Destacados
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los proyectos reales en los que he trabajado, desde gestión empresarial hasta plataformas multimedia.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flotax}
              isBlog={false}
              title="Flotax AGC"
              description="Gestor de Flota Vehicular Personal completo. Sistema integral para la administración y control de flotas de vehículos, con seguimiento en tiempo real, gestión de mantenimiento y reportes detallados."
              demoLink="https://flotaxagc.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radio}
              isBlog={false}
              title="Radio Rías"
              description="Sitio web completo con radio en vivo y sistemas para noticias, podcasts y contenido multimedia. Plataforma interactiva que permite la transmisión en tiempo real y gestión de contenido audiovisual."
              demoLink="https://radiorias.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radioapp}
              isBlog={false}
              title="Radio Rías App"
              description="Aplicación móvil multiplataforma de Radio Rías para Play Store y App Store. Próximamente disponible para descarga. Escucha radio en vivo, podcasts y contenido exclusivo desde tu dispositivo móvil."
              status="📱 Próximo Lanzamiento"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitaliza}
              isBlog={false}
              title="Vitaliza"
              description="Sitio web para asociación sin ánimo de lucro dedicada al bienestar de las personas. Plataforma que promueve la salud mental, física y emocional a través de recursos, información y programas comunitarios."
              demoLink="https://vitaliza.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeapost}
              isBlog={false}
              title="JEAPOST"
              description="Gestor de correspondencia en desarrollo. Sistema completo para la gestión, seguimiento y control de correspondencia empresarial con funciones de rastreo, notificaciones y reportes en tiempo real."
              status="🚧 En Desarrollo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lavete}
              isBlog={false}
              title="La Vete"
              description="E-commerce moderno en desarrollo para la venta de productos en línea. Plataforma completa de comercio electrónico con carrito de compras, gestión de inventario, pasarela de pagos y panel de administración integrado."
              status="🚧 En Desarrollo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motoracer}
              isBlog={false}
              title="Motoracer Taller & Lavadero"
              description="Sitio web para taller mecánico y servicio de lavado de vehículos. Plataforma que permite agendar citas, consultar servicios, ver precios y gestionar el negocio automotriz de manera eficiente."
              status="🚧 En Desarrollo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
