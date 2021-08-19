import React from "react";
import "./Dashboard.css";

// import backgroundImage from "../images/background.jpg";
function Dashboard() {
  return (
    <main className="text-wrapper">
      <div
      // style={{
      //   backgroundImage: `url(${"backgroundImage"})`,
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
      // width: "100vw",
      // height: "100vh",
      // }}
      >
        <h1 className="header">Chill Pill Dashboard</h1>
        <h2>Events</h2>
        <h2>Locations</h2>
        <h2>Organizations</h2>
      </div>
      <div className="searchbar">
        <form action="/" method="get">
          <label htmlFor="header-search"></label>
          <span>
            {" "}
            <input
              type="text"
              id="header-search"
              placeholder="Search "
              name="s"
            />
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </span>
        </form>
      </div>
    </main>
  );
}

export default Dashboard;
