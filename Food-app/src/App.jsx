import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navigation from "./components/Link";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
