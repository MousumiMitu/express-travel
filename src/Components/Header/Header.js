import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="logo-box">
        <h2>Logo</h2>
      </div>
      <div className="nav-lists">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>Destination</li>
          <li>Contact</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        {/* <div className="btn-box">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
