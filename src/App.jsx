import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="felx-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
