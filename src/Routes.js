import {React, useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

const Routes = () => {

  const [cart, setCart] = useState([]);
  const [cartInfo, setCartInfo] = useState({ itemsCount: 0, totalPrice: 0})

  useEffect(() => {
    const count = cart.reduce((acc, cur) => {
      return acc + cur.count
    }, 0 );
    const price = cart.reduce((acc, cur) => {
      return acc + cur.count * cur.price;
    }, 0 );
    setCartInfo({
      itemsCount: count,
      totalPrice: price,
    });
  },[cart]);

  const addToCart = (item) => {
    const result = cart.map((cartItem) => cartItem.id).includes(item.id);
    if (result) {
      updateCount (item.id, 1);
    } else {
      setCart([...cart, item]);
    }
  };

  const updateCount = (id, num) => {
    setCart(
      cart.map((cartItem) =>
    cartItem.id === id
  ? {...cartItem, count: cartItem.count + num}
  : cartItem
    )
  );
};

const removeItem = (id) => {
  setCart( cart.filter((cartItem) => {
    return cartItem.id !== id;
  }));
};

const increaseCount = (id) => {
  setCart( cart.map((cartItem) => {
    return cartItem.id === id ? {...cartItem, count: cartItem.count + 1} : {...cartItem};
  }));
};

const decreaseCount = (id) => {
  setCart( cart.map((cartItem) => {
    return cartItem.id === id && cartItem.count === 1 ? {...cartItem } : cartItem.id === id ? {...cartItem, count: cartItem.count -1} : {...cartItem};
  }));
};

  return (
    <BrowserRouter>
    <Nav cartInfo={cartInfo}/>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/products"  component={Products}/>
      <Route exact path="/product/:id" render={({ props, match }) => (<Product match={match} addToCart={addToCart} />)}/>
      <Route exact path="/cart" render={({ props }) => (<Cart cartInfo={cartInfo} cart={cart} decreaseCount={decreaseCount} increaseCount={increaseCount} removeItem={removeItem} />)}/>
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
