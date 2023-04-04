import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <center>
        <nav className={`navbar97 navbar navbar-dark justify-content-center`}>
          <div className={`navbarBG justify-content-center`} id="navbarNav">
            <ul
              className="navbar-nav px-4 justify-content-center"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <li className={`nav-item`}>
                <NavLink
                  className="nav-link"
                  end
                  aria-current="page"
                  exact="true"
                  to="/portfolio/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-4 ">
                <NavLink
                  to="/portfolio/about"
                  aria-current="page"
                  className="nav-link"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio/contact"
                  aria-current="page"
                  className="nav-link"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </center>
    </>
  );
};

export default NavBar;
