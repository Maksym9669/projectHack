import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./pages/Data";
import About from "./pages/About";
import Enterdata from "./pages/Enterdata";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layout/Header";
import Jumbotron from "./layout/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Data} />
              <Route exact path="/server" component={About} />
              <Route exact path="/enterdata" component={Enterdata} />
            </Switch>
          </div>
          <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left" />
            <div className="footer-copyright text-center py-3">
              Made by PEO.
              <a href="https://mdbootstrap.com/bootstrap-tutorial/"> </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
