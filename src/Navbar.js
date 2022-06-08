import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top button navbar-expand-lg">
      <div className="container-fluid">
        <a className="text navbar-brand" href="#">
          {" "}
          <span>
            <img src="Images/Postit 1.png" alt="" />{" "}
          </span>
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="text nav-link" aria-current="page" href="#">
              Stories
            </a>
            <a className="text nav-link" href="#">
              Contact
            </a>
            <a className="text nav-link" href="#">
              Sign In
            </a>
            <a className="text nav-link">
              <button className="text nav-link2">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
