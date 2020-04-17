import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Stats from "./Stats";
import { HOME_PAGE, NEW_PAGE, EDIT_PAGE } from "../constants";

const Nav: React.SFC<{}> = () => {
  const [navOpen, toggleNav] = React.useState<boolean>(false);
  const location = useLocation();

  React.useEffect(() => {
    toggleNav(false);
  }, [location]);

  const toggle = (e: any) => {
    e.preventDefault();
    toggleNav(!navOpen);
  };

  const navClass = navOpen ? "open" : "";

  return (
    <nav className={navClass}>
      <button onClick={toggle} className="btn toggle-menu">
        <i className={`${navOpen ? "fas fa-times" : "fas fa-bars"}`}></i>{" "}
        {navOpen ? "close" : "menu"}
      </button>
      <div className="nav-top">
        <ul className="nav-links">
          <li>
            <NavLink
              activeClassName="current"
              to={HOME_PAGE}
              className="btn nav-button"
              exact
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to={NEW_PAGE}
              className="btn nav-button"
              exact
            >
              new
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to={EDIT_PAGE}
              className="btn nav-button"
              exact
            >
              edit
            </NavLink>
          </li>
        </ul>
      </div>
      <Stats />
    </nav>
  );
};

export default Nav;
