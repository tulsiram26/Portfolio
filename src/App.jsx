import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Nav />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
