import React, { Component } from "react";
import Contact from "../components/Contact";

export default class Enterdata extends Component {
  butClick = () => {
    let n = document.getElementById("formGroupExampleInput").value;
    console.log(n);
    this.renderBlocks(n);
  };

  renderBlocks = n => {
    for (let i = 0; i < n; i++) {
      console.log("Hey");
    }
  };
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
            <div className="form-group text-center">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    id="numVisit"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Number of visitors"
                  />
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    class="btn btn-dark"
                    id="button12"
                    onClick={this.butClick}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
            <Contact />
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}
