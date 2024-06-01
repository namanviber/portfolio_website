import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiKeras,
  SiTensorflow,
  SiCss3,
  SiHtml5,
  SiDart,
  SiFlutter,
  SiLinux,
  SiDocker,
  SiAmazonaws,
  SiFirebase,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <span>C++</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span>Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span>Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <span>MySQL</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <span>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <span>PyTorch</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <span>Keras</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <span>TensorFlow</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <span>CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <span>HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
        <span>Dart</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <span>Flutter</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <span>Linux</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <span>Docker</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <span>AWS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <span>Firebase</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span>Git</span>
      </Col>
    </Row>
  );
}

export default Techstack;