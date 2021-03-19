import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        </ul>
        <div className="btn-box">
          {loggedInUser && <button> {loggedInUser.name}</button>}
          {!loggedInUser && (
            <button>
              <Link to="/login">login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
