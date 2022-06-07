import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <body className="d-flex h-100 bg-image">
          <div className=" w-100 h-100 p-3 mx-auto flex-column">
            <main className="px-3">
              <h2>Welcome to our Garden:</h2>
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
        </body>
      </>
    );
  }
}

export default Home;
