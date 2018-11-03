import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo1 from "./favicon.png";
import favicon from "./favicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./layout/Header";
import Jumbotron from "./layout/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
        </Router>
        <div className="container-fluid">
          <div className="row top-buffer">
            <div className="col-1" />
            <div className="col-3 text-center">
              <img
                src="./newLogo.png"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
            <div className="col-7">
              <Jumbotron />
            </div>
            <div className="col-1" />
          </div>
          <div className="row top-buffer bg-primary">
            <div className="col-2" />
            <div className="col-4">
              <img
                src="https://i.ytimg.com/vi/AHJVDFop9sU/maxresdefault.jpg"
                className="img-fluid rounded float-left"
                alt="Responsive image"
                border="border-secondary"
                style={{ margin: "20px" }}
              />
            </div>
            <div className="col-6">
              <p className="text-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
