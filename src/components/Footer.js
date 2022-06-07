import React, { useState, Modal } from "react";
import { Container, Row, Col, Button, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2" className="text-dark">
            This will be site navigation!
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
          <Col>
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeaddy@fakeemail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Admin@TheGrowClub.com
            </a>
            <br />
            <Button color="warning">Join Our Mailing List</Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
