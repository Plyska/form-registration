import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue darken-2" style={{ padding: "0 2rem" }}>
          <span className="brand-logo">
            App
          </span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/main">Main Page</NavLink>
            </li>
            <li>
              <NavLink to="/secondary">Secondary page</NavLink>
            </li>
            <li>
              <a href="/" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
