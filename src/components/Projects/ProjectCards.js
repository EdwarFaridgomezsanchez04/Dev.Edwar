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
                backgroundColor: "#cd5ff8",
                color: "white",
                padding: "8px 20px",
                borderRadius: "5px",
                fontSize: "14px",
                fontWeight: "bold",
                display: "inline-block"
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
