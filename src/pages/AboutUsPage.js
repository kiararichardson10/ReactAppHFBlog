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
import pageImage from "../photos/cannahandphoto.JPG";

export const AboutUsPage = () => {
  return (
    <>
      <Header />
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb style={{ backgroundColor: "transparent" }}>
                <MDBBreadcrumbItem>
                  <Link to="/">Home</Link>
                  {""}
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <Link to="/community">Community</Link>
                  {""}
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>About Us</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex row-content">
            <MDBCol className="mt-5" md="6">
              <h3 className="text-center">About Us</h3>
              <p
                className="text-center mt-5"
                style={{ fontWeight: "bolder", fontSize: "large" }}
              >
                The Grow Club is a dedicated space for cannabis connoisseurs,
                hobby growers, activists and the like to connect and share their
                stories, growing journeys and experiences with one another.
                While cultures and communities who use, study, and celebrate
                cannabis have existed for centuries, stigma has forced a lot of
                those communities behind closed doors both in the public space
                and online.{" "}
              </p>
              <br />
              <p
                className="text-center"
                style={{ fontWeight: "bolder", fontSize: "large" }}
              >
                With legalization efforts expanding access to the plant and
                grassroots efforts doing the work of educating the masses on its
                benefits, cannabis connoisseurs are no longer relegated to the
                dark corners of society. With knowledge as our power,
                cannabis-lovers can be unashamed, proud, and vocal about their
                participation and admiration for the plant. The Grow Club social
                media app stands in the gap left by other social media platforms
                to amplify socially marginalized voices, celebrate our
                experiences with one another, and expand knowledge and access to
                the plant.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <picture>
                <img
                  src={pageImage}
                  alt="Cannabis plant in hand"
                  className="img-fluid img-thumbnail"
                  // style={{
                  //   maxWidth: "35rem",
                  //   marginTop: "60px",
                  //   marginLeft: "100px",
                  // }}
                />
              </picture>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};
