import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/2018/06" className="nav-link">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
