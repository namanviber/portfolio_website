import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imgforg from "../../Assets/Projects/imgforg.png";
import gameghoul from "../../Assets/Projects/gameghoul.png";
import movigo from "../../Assets/Projects/movigo.png";
import videoGen from "../../Assets/Projects/videoGen.png";
import flightPred from "../../Assets/Projects/flightPred.png";
import legalAI from "../../Assets/Projects/legalAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoGen}
              isBlog={false}
              title="Multilingual Animation Generator"
              description="This project presents a novel AI-powered system for automatic video generation from text input. Supporting Hindi, Punjabi, and English languages, the system allows users to seamlessly convert written content into high-quality videos. Users can choose their preferred output language (Hindi or English) for the generated video."
              ghLink="https://github.com/namanviber/Multilingual_Animation_Generator_Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legalAI}
              isBlog={false}
              title="Legal Document Summarizer"
              description="This project focused on developing a specialized AI tool for summarizing legal documents. By fine-tuning several large language models on a comprehensive dataset of legal documents from the UK and India, the project aimed to improve the ability to generate concise and accurate summaries tailored for the legal domain."
              ghLink="https://github.com/namanviber/Legal-AI-Summarizer"
              demoLink="https://huggingface.co/spaces/namanviber/LegalAISummarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flightPred}
              isBlog={false}
              title="Flight Delay Prediction"
              description="It is a weather data-based flight delay prediction system using a Random Forest model and evaluated several other machine learning models to ensure optimal performance. This involved data preprocessing, model training, and thorough evaluationto accurately predict delays, enhancing decision-making processes for airlines and passengers"
              ghLink="https://github.com/namanviber/Flight-Delay-Prediction"
              demoLink="https://huggingface.co/spaces/namanviber/Flight_Delay_Prediction"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movigo}
              isBlog={false}
              title="Movigo"
              description="Movigo, a movie recommendation application which uses collaborative filtering to provide personalized movie recommendations. It was build on Flutter framework, ensuring a seamlessintegration of advanced recommendation algorithms with an intuitive user interface"
              ghLink="https://github.com/namanviber/movigo"
              demoLink="https://bit.ly/43dUUEs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameghoul}
              isBlog={false}
              title="Game Ghoul"
              description="A dynamic gaming website featuring gaming related stuff, blogs, read reviews, and shop for merchandise and accessories."
              ghLink="https://github.com/namanviber/Game-Ghoul-Website"
              demoLink="https://namanviber.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgforg}
              isBlog={false}
              title="Image Forgery Detection"
              description="An image forgery detection system using digital image processing techniques. This involved implementing algorithms to analyze and identify signs of manipulation in images, ensuring the detection of forgeries with high accuracy andreliability."
              ghLink="https://github.com/namanviber/Image-Forgery-Detection-DIP"
              demoLink="https://detectimagetampering.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
