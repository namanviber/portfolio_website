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
import SendMeMessage from "./message";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.4em", fontWeight: "bold" , textAlign: "left"}}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            As an easygoing person, my goal is to produce high-quality results in the shortest amount of time and with the least amount of effort. 🤷‍♂️
              <br />I am proficient in 
              
                <b className="purple"> Python, C++ </b> and database management systems such as<b className="purple"> MySQL, MongoDB. </b>
              <br />
              My areas of interest include working on  &nbsp;
                <b className="purple">Large Language & Deep Learning Models </b> and
                as well as {" "}
                <b className="purple">
                  Mobile and Web Development.
                </b>
              <br />
              I am also familiar with  
              with <b className="purple">Node.js</b> and frameworks
              &nbsp;like
                <b className="purple"> Dart & React.js </b>
              <br />
              In my spare time, I enjoy reading about history and staying up to date on current events and technology.

            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <h1 style={{ fontSize: "2.4em", fontWeight: "bold" , color: "white", textAlign: "left", paddingLeft: "50px", paddingBottom: "20px", paddingTop: "200px"}}>
              Contact Me
            </h1>
      <SendMeMessage />
      <br></br>
      <br></br>
      <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/namanviber"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/namanviber"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/namanviber/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naman_viber"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> 
    </Container>
    
  );
}
export default Home2;
