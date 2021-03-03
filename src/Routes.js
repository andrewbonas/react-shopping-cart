import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
    < Nav/>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/product/:id" component={Product} />
    <Route exact path="/cart" component={Cart} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
