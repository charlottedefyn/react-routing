import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

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
            {/* définir la route qui va mener vers la page not found attention à l'ordre !!!*/}
            <Route path="/not-found" component={NotFound} />
            {/** home toujours à la fin */}

            <Redirect from="/produits" to="/products" />

            <Route path="/" exact component={Home} />
            {/* si aucune route ne match avec l'url demandé alors c'est le composant Redirect qui va prendre en charge le comporte , c'est à dire rediriger vers not-found */}
            <Redirect to="/not-found" />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
