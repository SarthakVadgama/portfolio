import NavBar from "./components/NavBar";
import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/App.css";
import "./css/Navbar.css";
import "./css/Footer.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title = "Sarthak Vadgama | Home";
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <div className="blurBG">
          <span className="shape"></span>
          <span className="shape2"></span>
          <span className="shape3"></span>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
