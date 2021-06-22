import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Components/Navbar";
// import { Container } from "reactstrap";
import About from "./Components/Pages/AboutMe";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, faCodeBranch);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
