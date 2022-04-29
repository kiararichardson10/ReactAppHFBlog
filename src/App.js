import React from "react";
import Header from "./components/HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Blog = () => (
  <div>
    <h2>Blog</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
);

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
