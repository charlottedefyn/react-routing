import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  style = {
    background: "#000",
    color: "white",
    display: "block"
  };
  getNavLinkClass = path => {
    return this.props.href === path
      ? "list-group-item active"
      : "list-group-item";
  };
  style = {
    color: "white",
    textDecoration: "none",
    outline: 0
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Menu</div>
        <ul className="list-group list-group-flush">
          <li className={this.getNavLinkClass("/admin/posts")}>
            <NavLink to="/admin/posts" activeStyle={this.style}>
              Gestion des articles
            </NavLink>
          </li>
          <li className={this.getNavLinkClass("/admin/users")}>
            <NavLink to="/admin/users" activeStyle={this.style}>
              Gestion users
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
