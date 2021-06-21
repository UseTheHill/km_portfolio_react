import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Navbar from "./Components/Components/Navbar";
import About from "./Components/Pages/AboutMe";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Container>
    </div>
  );
}
