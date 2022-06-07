import React from "react";
import { Navbar } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <Navbar sticky="top" expand="md" id="navbar">
      <h1>The Grow Club</h1>
    </Navbar>
  );
};
