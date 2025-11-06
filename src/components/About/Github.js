import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días que <strong className="purple">Programo</strong>
      </h1>
      <GitHubCalendar
        username="EdwarFaridgomezsanchez04"
        blockSize={15}
        blockMargin={5}
        color="#4A90E2"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
