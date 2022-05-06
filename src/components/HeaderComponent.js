import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <h2>Herb &#38; Fire</h2>

        <main className="px-3">
          <h1>Welcome to our Garden</h1>
          <p className="lead" id="coverslogan">
            An ode to our favorite hobby
          </p>
          <p className="lead" id="coverbutton">
            <Button outline color="warning" href="#">
              Explore
            </Button>
          </p>
        </main>
      </>
    );
  }
}

export default Header;
