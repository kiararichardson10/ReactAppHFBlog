import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React, { Component } from "react";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export const ContactPage = () => {
  return (
    <>
      <Header />
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h3 className="p-2">Contact Us</h3>
              <hr />
            </MDBCol>
          </MDBRow>
          <MDBRow className="row-content align-items-center">
            <MDBCol sm="4">
              <h5>Our Address</h5>
              <address>
                420 Canna Drive NE
                <br />
                Washington, DC 20002
                <br />
              </address>
            </MDBCol>

            <MDBCol>
              <a role="button" className="btn btn-link" href="tel:+12024200071">
                <FontAwesomeIcon icon={faPhone} />
                1-202-420-0071
              </a>
              <br />
              <a
                role="button"
                className="btn btn-link"
                href="mailto:fakeemail@fakeemail.co"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                admin@thegrowclub.com
              </a>
            </MDBCol>
            <div>
              <hr />
            </div>
          </MDBRow>
          <MDBRow className="row-content">
            <MDBCol col="12">
              <h3>Send us your Feedback</h3>
              <hr />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};
