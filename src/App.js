import React from "react";
import Home from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Community } from "./pages/CommunityPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
