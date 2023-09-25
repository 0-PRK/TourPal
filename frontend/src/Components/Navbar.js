import React from "react";
import PropTypes from "prop-types";
import logo from "./images/Logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const userId = localStorage.getItem("userId");
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid NewNavbarContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {props.isAuthenticated ? (
              // Render content for authenticated users
              <>
                <NavLink className="navbar-brand" to={`./Home/${userId}`}>
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
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      style={{ font: "Montserrat", fontSize: 30 }}
                      to={`./Home/${userId}`}
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

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      style={{ font: "Montserrat", fontSize: 30 }}
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USER PROFILE
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`Home/settings/${userId}`}
                          className="dropdown-item "
                        >
                          Settings
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          onClick={() => {
                            localStorage.removeItem("accessToken");
                            localStorage.removeItem("userId");
                            window.location.reload();
                          }}
                          className="dropdown-item  "
                        >
                          Log Out
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            ) : (
              // Render content for non-authenticated users
              <>
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
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      style={{ font: "Montserrat", fontSize: 30 }}
                      to="/"
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
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setmodal: PropTypes.func.isRequired,
};
