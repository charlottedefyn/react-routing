import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="/posts/2018/06" className="nav-link">
            Posts
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin" className="nav-link">
            Admin
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
