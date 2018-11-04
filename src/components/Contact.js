import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
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
        <hr className="hr1" />
      </form>
    );
  }
}
