import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="topnav">
        <Link className="active" to="/aboutus">
          Helping Hands
        </Link>

        <div className="topnav-right">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/Event">Events</Link>
          <Link to="/Volunteer">Volunteer</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
