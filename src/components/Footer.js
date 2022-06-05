import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2" className="text-white">
            this will be site navigation!
          </Col>
          <Col xs="6" sm="3" className="text-white text-center">
            Portfolio project for{" "}
            <a href="https://www.nucamp.co/" className="text-warning">
              Full Stack Bootcamp
            </a>
            , by{" "}
            <a
              href="https://www.linkedin.com/in/kiara-richardson-146ba788/"
              className="text-warning"
            >
              Kiara Richardson
            </a>
          </Col>
          <Col className="text-warning">
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeaddy@fakeemail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Admin@TheGrowClub.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
