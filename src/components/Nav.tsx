import * as React from "react";
import { Link } from "react-router-dom";
import Stats from "./Stats";

const Nav: React.SFC<{}> = () => {
  const [navOpen, toggleNav] = React.useState<boolean>(false);

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
            <Link to="/" className="btn nav-button">
              home
            </Link>
          </li>
          <li>
            <Link to="/new" className="btn nav-button">
              new
            </Link>
          </li>
          <li>
            <Link to="edit" className="btn nav-button">
              edit
            </Link>
          </li>
        </ul>
      </div>
      <Stats />
    </nav>
  );
};

export default Nav;
