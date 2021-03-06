import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Stats from "./Stats";
import {
  HOME_PAGE,
  NEW_PAGE,
  EDIT_PAGE,
  LOCALE_EN,
  LOCALE_FI,
} from "../constants";
import AppContext from "../context";

const Nav: React.SFC<{}> = () => {
  const [navOpen, toggleNav] = React.useState<boolean>(false);
  const location = useLocation();
  const data = React.useContext(AppContext);
  const { localizations } = data;
  const content: any = localizations;
  React.useEffect(() => {
    toggleNav(false);
  }, [location]);

  const toggle = (e: any) => {
    e.preventDefault();
    toggleNav(!navOpen);
  };

  const changeLang = (e: any, locale: string) => {
    e.preventDefault();
    data.changeLang(locale);
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
              {content.nav.frontpageBtn}
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to={NEW_PAGE}
              className="btn nav-button"
              exact
            >
              {content.nav.newBtn}
              <i className="fas fa-plus-square"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="current"
              to={EDIT_PAGE}
              className="btn nav-button"
              exact
            >
              {content.nav.editBtn}
              <i className="fas fa-edit"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <Stats />
        <div className="text-center">
          <button className="btn" onClick={(e) => changeLang(e, LOCALE_FI)}>
            {LOCALE_FI}
          </button>
          <button className="btn" onClick={(e) => changeLang(e, LOCALE_EN)}>
            {LOCALE_EN}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
