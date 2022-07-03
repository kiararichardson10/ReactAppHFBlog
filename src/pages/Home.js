import React, { useEffect } from "react";
import { Card, CardText, CardTitle, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../photos/bgphoto.JPG";
import { UserLoginForm } from "../features/UserLoginForm";
import { MDBRow } from "mdbreact";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <main
        className="bg-image"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <MDBRow className="text-center mb-0 p-5">
            <h1 className="p-5">The Grow Club</h1>
            <h4>A Community For Growers</h4>
          </MDBRow>
          <MDBRow className="d-flex row-content flex-row">
            <div className="p-5 text-center">
              <UserLoginForm />
            </div>
          </MDBRow>
        </div>
      </main>
    </>
  );
}
