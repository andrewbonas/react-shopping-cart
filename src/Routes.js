import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import Cart from "./components/Cart";

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
