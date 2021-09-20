import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "./Header.css";
import { IconContext } from "react-icons";
import Auth from "../../utils/auth";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const loggedIn = Auth.loggedIn();

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link
            to="/"
            className="home"
            style={{ paddingLeft: "15px", fontSize: "25px", color: "#fff" }}
          >
            Helping Hands
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {loggedIn ? (
              <>
                <li>
                  <Link to="/Event" className="nav-text">
                    <li className="link">
                      {" "}
                      <MdIcons.MdEventAvailable />
                      Events
                    </li>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={logout} className="nav-text">
                    <li className="link">
                      {" "}
                      <AiIcons.AiOutlineUser />
                      Logout
                    </li>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="nav-text" to="/login">
                    <li className="link">
                      {" "}
                      <AiIcons.AiOutlineUser /> Login
                    </li>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-text">
                    <li className="link">
                      <AiIcons.AiOutlineUserAdd /> Signup
                    </li>
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Volunteer" className="nav-text">
                <li className="link">
                  {" "}
                  <IoIcons.IoMdPeople />
                  Volunteer
                </li>
              </Link>
            </li>
            <li>
              <Link to="/donate" className="nav-text">
                {" "}
                <li className="link">
                  {" "}
                  <FaIcons.FaHandHoldingHeart />
                  Donate
                </li>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";

// import "./Header.css";

// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   li,
//   IconButton,
// } from "@chakra-ui/react";

// import { HamburgerIcon } from "@chakra-ui/icons";

// function Header() {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   const loggedIn = Auth.loggedIn();

//   return (
//     <header>
//       <div className="topnav">
//         <Link className="active" to="/">
//           Helping Hands
//         </Link>

//         <div className="topnav-right">
//           <Menu>
//             <MenuButton
//               as={IconButton}
//               aria-label="Options"
//               icon={<HamburgerIcon />}
//               variant="outline"
//             />
//             <MenuList borderColor="none">
//               {loggedIn ? (
//                 <>
//                   <li>
//                     <Link to="/Event">Events</Link>
//                   </li>
//                   <li>
//                     <Link href="/" onClick={logout}>
//                       Logout
//                     </Link>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li>
//                     <Link to="/login">Login</Link>
//                   </li>
//                   <li>
//                     <Link to="/signup">Signup</Link>
//                   </li>
//                 </>
//               )}

//               <li>
//                 <Link to="/Volunteer">Volunteer</Link>
//               </li>
//               <li>
//                 <Link to="/donate">Donate</Link>
//               </li>
//             </MenuList>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
