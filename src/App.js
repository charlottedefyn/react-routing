import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <section>
          <Switch>
            {/** de la route la plus précise à la moins précise */}
            <Route path="/admin" component={Dashboard} />
            <Route path="/posts/:annee/:mois" component={Posts} />
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            {/** home toujours à la fin */}
            <Route path="/" exact component={Home} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
