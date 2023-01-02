import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitcoin from "../../Assets/Projects/bitcoin.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">projetos </strong>recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui você encontrará todos os meus projetos
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoin}
              isBlog={false}
              title="Create a Bitcoin Wallet"
              description="É um criador de carteira de bitcoin que tambem faz a parte de mineração por meio de uma interface grafica , Baseado em node.js , typescript. Esta em desenvolvimento ainda"
              ghLink="https://github.com/Pedfari155/Blockchain-Study"
                         />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
