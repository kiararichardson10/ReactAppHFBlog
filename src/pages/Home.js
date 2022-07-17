import React, { useEffect } from "react";
import { FormGroup, Form, Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import background from "../photos/bgphoto.JPG";
// import { UserLoginForm } from "../features/UserLoginForm";
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Home() {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);

  return (
    <>
      <main
        className="bg-image"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <MDBRow className="text-center mb-0 p-4">
            <h1 className="p-5">The Grow Club</h1>
            <h4>A Community For Growers</h4>
          </MDBRow>

          <MDBContainer>
            <MDBRow className="d-flex row-content">
              <MDBCol className="d-flex justify-content-center">
                <Form>
                  <div className="text-center text-white p-2">
                    Sign in with:
                  </div>

                  <MDBBtn className="mx-3" tag="a" floating color="info">
                    <MDBIcon fab icon="google" />
                  </MDBBtn>
                  <MDBBtn tag="a" floating color="info">
                    <MDBIcon fab icon="microsoft" />
                  </MDBBtn>
                  <MDBBtn className="ms-3" tag="a" floating color="info">
                    <MDBIcon fab icon="yahoo" />
                  </MDBBtn>

                  <br />
                  <div className="text-white text-center p-2"> or: </div>

                  <FormGroup className="d-flex">
                    <Input
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </FormGroup>
                  <a
                    href="#!"
                    className="mx-3 text-muted d-flex"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot your password?
                  </a>
                  <div className="d-flex justify-content-center mt-2 mb-3">
                    <MDBBtn color="warning" rounded>
                      Login
                    </MDBBtn>
                  </div>
                  <div className="text-muted text-center d-flex">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>
                  </div>
                </Form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </main>
    </>
  );
}
