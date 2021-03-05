import React, { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import "../styles/Products.css";
import { Link } from "react-router-dom";

function Products() {
  useEffect(() => {
    trackPromise(fetchItems());
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="product d-flex flex-wrap flex-row text-center">
      {items.map((item) => (
        <div className="card m-2 justify-content-center border-none">
          <Link
            className="text-decoration-none"
            key="{item.id}"
            to={`/product/${item.id}`}
          >
            <img className="center-block" src={item.image} alt="Product" />
            <div className="card-body text-dark">
              <h6>{item.title}</h6>
              <p>$ {item.price.toFixed(2)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
