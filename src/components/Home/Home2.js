import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Para <span className="purple"> Me Conhecer </span> Melhor
            </h1>
            <p className="home-about-body">
              Eu Amo Mecher em computação , MInha historia na computação começou com 6 anos 
              Com aqueles computadores tijolão branco , Não que hoje seja outra cor
              <br />
              <br />Sou Intermediario ainda em Linguagens como 
              <i>
                <b className="purple"> C++, Javascript (Node.js e React.js) e Python. </b>
              </i>
              <br />
              <br />
              Meu real Interesse é &nbsp;
              <i>
                <b className="purple">Desenvolver websites e Manejar dados </b> 
                alem de outras areas relacionadas a Programação {" "}
                
              </i>
              <br />
              <br />
             Sempre que possivel faço meus projetinhos basicos 
              usando <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  outras linguagens e Frameworks.
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me Procure</h1>
            <p>
              É gratis , Pode clicar nos icones <span className="purple"> Prometo não tem virus</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pedfari155"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://fotos.web.sapo.io/i/B201276fe/20265327_SeF9N.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pedro-phelipe-de-souza-faria-906638129/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://fotos.web.sapo.io/i/B201276fe/20265327_SeF9N.jpeg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
