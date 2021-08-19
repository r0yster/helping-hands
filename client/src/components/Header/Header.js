import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header>
      <Link to="/home">Chill Pill</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </header>
  );
}

export default Header;
