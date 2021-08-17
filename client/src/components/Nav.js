import React from "react";
import "./Nav.css";

function Navigation(props) {
  const tabs = ["Dashboard", "Signup", "Login"];
  return (
    <nav>
      <ul className="nav nav-tabs links">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              href={"#" + tab}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
