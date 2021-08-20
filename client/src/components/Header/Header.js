import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="topnav">
        <Link classNameName="active" to="/aboutus">
          Chill Pill
        </Link>

        <div className="topnav-right">
          <Link to="/aboutus">About</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
