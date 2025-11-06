import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Si hay demo link, mostrar botón de sitio web */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ width: "100%" }}
          >
            <CgWebsite /> &nbsp;
            Ver Sitio Web
          </Button>
        )}

        {/* Si NO hay demo link, mostrar etiqueta de estado */}
        {!props.demoLink && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <span
              style={{
                backgroundColor: "#4A90E2",
                color: "white",
                padding: "8px 20px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
                display: "inline-block",
                transition: "all 0.3s ease",
                transformStyle: "preserve-3d"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {props.status || "🚧 En Desarrollo"}
            </span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
