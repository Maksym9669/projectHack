import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-primary text-center justify-content-center">
      <div className="container">
        {/* <a href="/" className="navbar-brand" />
        <div>
          <a class="navbar-brand" href="#">
            <img
              src="../../newLogo.png"
              width="50"
              height="50"
              alt=""
              className="float-right"
            />
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div> */}

        <ul class="nav text-center justify-content-center">
          <div className>
            <li class="nav-item float-right">
              <Link
                to="/about"
                className="nav-link float-right text-light font-weight-bold"
              >
                Active
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link
                to="/about"
                className="nav-link float-right text-light font-weight-bold"
              >
                Link
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link
                className="nav-link float-right text-light font-weight-bold"
                to="/about"
              >
                Link
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link
                className="nav-link float-right text-light font-weight-bold"
                to="/about"
              >
                Disabled
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
