import React, { useState, Modal } from "react";
import { Container, Row, Col, Button, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLeaf,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const FooterComponent = () => {
  // Build joinMailingList Modal

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const footerTitles = {
    fontFamily: "Nunito Sans, sans-serif",
  };

  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2" className="text-dark">
            <h5 className="text-light" id="footerHeader" style={footerTitles}>
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs="6" sm="3" className="text-light text-center">
            <h5 id="footerHeader" style={footerTitles}>
              Portfolio Project
            </h5>{" "}
            <div style={footerTitles}>Developed by</div>
            <a
              href="https://www.linkedin.com/in/kiara-richardson-146ba788/"
              className="text-warning style={footerTitles}"
              title="Developer's LinkedIn"
            >
              Kiara Richardson
            </a>
          </Col>
          <Col xs="6" sm="3">
            <h5 className="text-light text-center" style={footerTitles}>
              Dev Socials
            </h5>
            <div className="d-flex justify-content-center">
              <a
                role="button"
                className="btn btn-link"
                title="LinkedIn"
                href="https://www.linkedin.com/in/kiara-richardson-146ba788/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>{" "}
              <a
                role="button"
                className="btn btn-link"
                title="GitHub"
                href="https://github.com/kiararichardson10/ReactAppHFBlog"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                role="button"
                className="btn btn-link"
                title="Instagram"
                href="https://www.instagram.com/bud_sistas/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                role="button"
                className="btn btn-link"
                href="https://leafly.com/"
              >
                <FontAwesomeIcon icon={faLeaf} />
              </a>
            </div>
          </Col>
          <Col xs="6" sm="3">
            <Button
              color="primary"
              title="Contact App Developer"
              className="mailto"
              href="mailto:kricharddc@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Email Developer
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
