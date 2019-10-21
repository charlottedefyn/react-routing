import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item" activeClassName="active">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item" activeClassName="active">
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
        <li className="nav-item" activeClassName="active">
          <NavLink to="/posts/2018/06" className="nav-link">
            Posts
          </NavLink>
        </li>
        <li className="nav-item" activeClassName="active">
          <NavLink to="/admin" className="nav-link">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
