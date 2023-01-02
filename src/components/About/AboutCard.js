import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ola a Todos, Meu nome é  <span className="purple">Pedro Phelipe de Souza Faria, </span>
            Hoje Moro em <span className="purple"> Bragança Paulista - São Paulo</span>
            <br />Sou iniciante em desenvolvimento , mas sinceramente depois
            de uns meses de estudos , estou amando essa area e pretendo continuar
            <br />
            <br />
           Alem de programar , algumas outras coisas que gosto de fazer
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar 
            </li>
            <li className="about-activity">
              <ImPointRight /> Modificar carros
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "O BUG força o programa a se adaptar, envolve-se em algo novo por causa disso."{" "}
          </p>
          <footer className="blockquote-footer">Elliot - Mr.Robot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
