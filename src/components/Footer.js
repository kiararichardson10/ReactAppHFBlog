import React, { useState, Modal } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLeaf } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Footer = () => {
  // Build joinMailingList Modal
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs={{ size: 4, offset: 1 }} sm="2" className="text-dark">
            <h5 className="text-dark" id="footerHeader">
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
          <Col xs="6" sm="3" className="text-dark text-center">
            <h5>Portfolio project for</h5>{" "}
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
          <Col xs="6" sm="3">
            <h5 className="text-dark text-center">Dev Socials</h5>
            <div className="d-flex justify-content-center">
              <a
                role="button"
                className="btn btn-link"
                href="https://www.linkedin.com/in/kiara-richardson-146ba788/"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>{" "}
              <a
                role="button"
                className="btn btn-link"
                href="https://github.com/kiararichardson10/ReactAppHFBlog"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                role="button"
                className="btn btn-link"
                href="https://youtube.com/"
              >
                <FontAwesomeIcon icon={faYoutubeSquare} />
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
            <Button color="warning">Join Our Mailing List</Button>
            {/* <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeaddy@fakeemail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Admin@TheGrowClub.com
            </a> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
