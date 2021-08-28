import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import "./Header.css";


function Header() {
  const logout = (event) => {
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
          {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
          </a>
      </div>
    </header>
  );

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}




export default Header;
