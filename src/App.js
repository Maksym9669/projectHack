import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
                className="img-fluid"
                alt="Responsive image"
              />
            </div>

            <div className="col-7">
              <Jumbotron />
            </div>

            <div className="col-1" />
          </div>
        </div>

        <div className="row top-buffer bg-primary">
          <div className="col-2" />
          <div className="col-4">
            <img
              src="https://i.ytimg.com/vi/AHJVDFop9sU/maxresdefault.jpg"
              className="img-fluid rounded float-left"
              alt="Responsive image"
              border="border-secondary"
              style={{
                margin: "20px"
              }}
            />
          </div>
          <div className="col-6">
            <p className="text-light" id="txt1">
              <h3>Business meetings</h3>
              <br />
              The most popular type of event we organize is business meetings.
              As these types of events are organized mostly with people not
              acquainted with each other, the decision they take wheteher to
              partner or not may be reliant on the way they communicate with
              each other and the ones that have similar intersets would get
              along with each other easily which would benefit their further
              business.
            </p>
          </div>
        </div>

        <div className="row top-buffer bg-primary">
          <div className="col-2" />

          <div className="col-4">
            <img
              src="https://www.lodgeatsantafe.com/sites/lodgeatsantafe.com/files/Lodge-Santa-Fe-T-Meetings-Weddings-Ballroom-Banquet-4_0.jpg"
              className="img-fluid rounded float-left"
              alt="Responsive image"
              border="border-secondary"
              style={{ margin: "20px" }}
            />
          </div>

          <div className="col-6">
            <p className="text-light" id="txt2">
              <h3>Weddings</h3>
              <br />A remarkable event in one's life. This event should be
              special and no way should be given to any kind of argument among
              attendees. And so, our tool would again be in use in a manner that
              it will help to sort out people to seats with the same
              personalities.
            </p>
          </div>
        </div>

        <div className="row top-buffer bg-primary">
          <div className="col-3" />
          <div className="col-3">
            <img
              src="https://sanjuanoaks.com/wp-content/uploads/sites/104/2018/07/banquets-1.jpg"
              className="img-fluid rounded float-left"
              alt="Responsive image"
              border="border-secondary"
              style={{ margin: "20px" }}
            />
          </div>

          <div className="col-6">
            <p className="text-light" id="txt3">
              <h3>Anniversaries and Birthdays</h3>
              <br />
              Even though these types of meetings are arranged among family
              members and relatives, they also need a proper planning of events
              and activities, which is also one of our jobs.
            </p>
          </div>
        </div>

        <div className="row top-buffer bg-primary">
          <div className="col-4">
            <i className="fas fa-birthday-cake" />
          </div>
          <div className="col-4">
            <i className="far fa-lightbulb" />
          </div>
          <div className="col-4">
            <i className="fas fa-clock" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
