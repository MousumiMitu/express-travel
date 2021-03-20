import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="header-section">
      <nav class="navbar navbar-expand-lg navbar-light navbar-width ">
        <div class="container-fluid flex-navbar">
          <a
            class="navbar-brand"
            href="#"
            style={{ color: "rgb(2, 56, 38)", fontWeight: "bold" }}
          >
            Express Travel
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse navbar-space" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item mx-3">
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "rgb(2, 56, 38)" }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item mx-3">
                <Link
                  to="/rides"
                  style={{ textDecoration: "none", color: "rgb(2, 56, 38)" }}
                >
                  Destination
                </Link>
              </li>
              <li class="nav-item mx-3">Blog</li>
              <li class="nav-item mx-3">Contact</li>
            </ul>
            <div className="btn-box mx-3">
              <button>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "rgb(2, 56, 38)" }}
                >
                  {loggedInUser.name ? loggedInUser.name : "Login"}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
