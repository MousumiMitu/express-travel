import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="logo-box">
        <h2>Logo</h2>
      </div>
      <div className="nav-lists">
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Contact</li>
        </ul>
        <div className="btn-box">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
