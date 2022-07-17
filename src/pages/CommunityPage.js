import React from "react";
import { Header } from "../components/Header";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import { Link } from "react-router-dom";

export function Community() {
  return (
    <>
      <Header />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb style={{ backgroundColor: "transparent" }}>
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
                {""}
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Community</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
