import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Project from "./components/Project";
import AboutMe from "./components/Aboutme";
import ProjectDetails from "./components/ProjectDetails";
import StreamSphere from "./components/Projects/StreamSphere";
import Chatbot from "./components/Projects/Chatbot";
import Premier from "./components/Projects/Premier";
import Dribble from "./components/Projects/Dribble";
import ObeysAgency from "./components/Projects/ObeysAgency";
import Refokus from "./components/Projects/Refokus";
const App = () => {
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
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/projects/streamsphere" element={<StreamSphere />} />
            <Route path="/projects/chatbot" element={<Chatbot />} />
            <Route path="/projects/premier" element={<Premier />} />
            <Route path="/projects/dribble" element={<Dribble />} />
            <Route path="/projects/refokus" element={<Refokus />} />
            <Route path="/projects/obeysagency" element={<ObeysAgency />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
