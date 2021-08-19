import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  const tabs = ["About", "Signup", "Login", "Donate"];
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navigation"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">Chill Pill Icon</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {tabs.map((tab) => (
              <Nav.Link
                href={"/" + tab}
                onClick={() => props.setCurrentPage(tab)}
              >
                {tab}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
