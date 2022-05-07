import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <body className="d-flex h-100 bg-image">
          <div className="d-flex w-100 h-100 p-3 mx-auto flex-column" id="mask">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <h1>The Grow Club</h1>

              <main className="px-3">
                <h2>Welcome to our Botanical Garden:</h2>
                <p className="lead" id="coverslogan">
                  A Community For Growers
                </p>
                <p className="lead" id="coverbutton">
                  <Button outline color="warning" href="#">
                    Explore
                  </Button>
                </p>
              </main>
            </div>
          </div>
        </body>
      </>
    );
  }
}

export default Header;
