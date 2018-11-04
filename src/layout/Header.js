import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-primary text-center justify-content-center">
      <div className="container">
        <ul class="nav text-center justify-content-center">
          <div className>
            <li class="nav-item float-right">
              <Link
                to="/about"
                className="nav-link float-right text-light font-weight-bold"
              >
                About us
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link
                className="nav-link float-right text-light font-weight-bold"
                to="/enterdata"
              >
                Try service
              </Link>
            </li>
            <li className="nav-item float-right">
              <Link
                className="nav-link float-right text-light font-weight-bold"
                to="/"
              >
                Home
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
