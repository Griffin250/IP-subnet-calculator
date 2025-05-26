import React from "react";
import Home from "./components/Home";
import { Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import HowToUse from "./components/HowToUse";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/howtouse" element={<HowToUse />} />
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
