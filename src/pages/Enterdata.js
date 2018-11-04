import React, { Component } from "react";
import Contact from "../components/Contact";

export default class Enterdata extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div
            className="col-6 bg-primary text-light shadow-lg p-3 mb-5 rounded"
            style={{ margin: "50px", padding: "30px" }}
          >
            <h1>Enter data about customers</h1>
            <form class="frm1">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                />
              </div>
            </form>
            <Contact />
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}
