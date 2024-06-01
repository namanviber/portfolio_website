import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naman Jain </span>
            from <span className="purple"> Panipat, India.</span>
            <br />
            <br />
            I’m a coding enthusiast with expertise in deep learning, large language models (LLMs), and artificial intelligence with proficiency in Python and C++.
            <br />
            <br />
            I have currently pursuing my BTech Dregree in Computer Science & Engineering at BML Munjal University, Gurugram.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading History Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying updated on current world news.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
          </ul>

          <p style={{ color: "white" }}>
            "Smartwork always better than hardwork"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "white" }}>Naman Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
