import React from "react";
import Sidebar from "./sidebar";
import { Route } from "react-router-dom";
import Posts from "./posts";
import Users from "./users";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <section className="row">
        <div className="col-3">
          <Sidebar href={window.location.pathname} />
        </div>
        <div className="col-9">
          <Route path="/admin/posts" component={Posts} />
          <Route path="/admin/users" component={Users} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
