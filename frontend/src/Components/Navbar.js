import React from "react";
import PropTypes from "prop-types";
import logo from "./images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid NewNavbarContent">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
            className="align-text-top"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={{ font: "Montserrat", fontSize: 30 }}
                to="/Home"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={{ font: "Montserrat", fontSize: 30 }}
                to="/About"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                onClick={() => props.setmodal(true)}
                style={{ font: "Montserrat", fontSize: 30 }}
                to="/Register"
              >
                SIGNUP
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                onClick={() => props.setmodal(true)}
                style={{ font: "Montserrat", fontSize: 30 }}
                to="/Login"
              >
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
