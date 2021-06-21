import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import "./style.css";
import skills from "../../Info/skills.js";

class About extends React.Component {
  state = {
    skills,
  };

  render() {
    return (
      <Jumbotron className="m-5 text-center">
        <h1 className="display-4">Hello!</h1>
        <p className="lead">I'm Kayte McDonough, a web developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="">
              I live in Lake Orion, Michigan but lived in California until age
              11. I enjoy going on walks with my family on the beautiful trails
              near me. I have a motto that I live by, Use The Hill. It is
              inspired from when I ran cross country in high school. This hills
              are where most people slow down, but I've always used them as an
              opportunity to lean in and pass the competition. Recently, I
              decided to change career paths, which can be considered a hill.
              I've worked with a non-profit on and off for the past decade
              supporting adults living with disabilities. I've always enjoyed
              working on database programs and websites throughout my career and
              decided to pursue web development. I'm leaning in and working
              really hard to learn all of the new coding languages. I'm excited
              to use this hill as an opportunity to become a great web
              developer.
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="">Technical Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map((skill) => (
            <Col>
              <img className="logo" src={skill.src} alt="Logo" />
            </Col>
          ))}
        </Row>
      </Jumbotron>
    );
  }
}

export default About;
