import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import "./Header.css";

function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const loggedIn = Auth.loggedIn();

  return (
    <header>
      <div className="topnav">
        <Link className="active" to="/">
          Helping Hands
        </Link>

        <div className="topnav-right">
          {loggedIn ? (
            <>
              <Link to="/Event">Events</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>  
          )}
          <Link to="/Volunteer">Volunteer</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
