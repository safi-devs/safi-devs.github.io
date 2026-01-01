import React from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/projects"} element={<Project />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
