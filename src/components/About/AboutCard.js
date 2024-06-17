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
            from <span className="purple"> Haryana, India.</span>
            <br />
            <br />
            I'm currently pursuing a Bachelor of Technology (BTech) degree in Computer Science & Engineering at BML Munjal University in Gurugram.
            <br />
            <br />
            I have a strong background in mobile and web application development
            using the Flutter and React frameworks, as well as proficiency in
            C++ and Python, with a focus on generative AI, deep learning, and
            machine learning. Apart from coding, I possess exemplary strategic
            thinking and problem-solving skills to help projects succeed. A
            collaborative team player recognised for routinely producing
            high-quality applications.
            <br />
            <br />
            Apart from my technological skills, I enjoy engaging in a variety of
            other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I'm fascinated by the historical conflicts,
              political actions, and transformations in society that shaped the
              world we live in.
            </li>
            <li className="about-activity">
              <ImPointRight /> I like to explore a variety of news sources and
              analyses to stay updated on political and economic developments
              throughout the world. 
            </li>
            <li className="about-activity">
              <ImPointRight />
              When I'm not doing any other stuff, you can find me eliminating
              the enemy team on Valorant.
            </li>
          </ul>

          <p style={{ color: "white" }}>
            "Knowledge is cool, but working smarter, not harder, is the real
            win."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "white" }}>
            Naman Jain
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
