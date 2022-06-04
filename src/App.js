import React from "react";
import Home from "./components/HomeComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Community } from "./components/CommunityComponent";
import { Header } from "./components/Header";

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Blog = () => (
//   <div>
//     <h2>Blog</h2>
//   </div>
// );

// const Contact = () => (
//   <div>
//     <h2>Contact</h2>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
