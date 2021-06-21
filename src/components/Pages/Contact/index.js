import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/headshot.jpg";
import "./style.css";

const Contact = (props) => {
  return (
    <div>
      <h3 className="m-5 text-center">Contact Information</h3>
      <hr className="my-4" />
      <Row className="d-flex justify-content-center">
        <Card className="w-50 mt-3">
          <CardHeader tag="h3">
            <Row>
              <Col className="ml-4">Kayte McDonough</Col>
              <Button
                color="secondary"
                className="mr-5"
                href="https://drive.google.com/file/d/1T-7m381P-ez4lvrgHsXBDFS-13THsuz9/view"
                target="_blank"
              >
                Resume
              </Button>
            </Row>
          </CardHeader>
          <CardBody>
            <CardTitle className="lead text-left">Web Developer</CardTitle>
            <Row>
              <Col xs="5">
                <img className="headshot" src={headshot} alt="Headshot" />
              </Col>
              <Col className="text-Left m-3">
                <CardText>
                  <img className="logo" src={emailIcon} alt="Logo" /> :{" "}
                  <a href="mailto:Kaytemcdonough@gmail.com">
                    Kaytemcdonough@gmail.com
                  </a>
                </CardText>
                <CardText>
                  <img className="logo" src={githubIcon} alt="Logo" /> :{" "}
                  <a href="https://github.com/UseTheHill">UseTheHill</a>
                </CardText>
                <CardText>
                  <img className="logo" src={linkedInIcon} alt="Logo" /> :{" "}
                  <a href="https://www.linkedin.com/in/kayte-mcdonough-88151a105/">
                    Kayte McDonough
                  </a>
                </CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
};

export default Contact;
