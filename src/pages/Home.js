import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../photos/bgphoto.JPG";

export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
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
    </>
  );
}

// export default Home;
