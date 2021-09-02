import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import "./Header.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton
} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'


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

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList borderColor="none">
              {loggedIn ? (
                <>
                  <MenuItem>
                    <Link to="/Event">Events</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/" onClick={logout}>
                      Logout
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup">Signup</Link>
                  </MenuItem>
                </>
              )}

              <MenuItem>
                <Link to="/Volunteer">Volunteer</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/donate">Donate</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </header>
  );
}




export default Header;
