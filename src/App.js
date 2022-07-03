import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Community } from "./pages/CommunityPage";
import { ContactPage } from "./pages/ContactPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
