import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </>
  );
};

export default App;
