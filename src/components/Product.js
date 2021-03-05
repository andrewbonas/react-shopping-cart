import React, { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import "../styles/Products.css";

function Product({ match, addToCart }) {
  useEffect(() => {
    trackPromise(fetchItem());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fakestoreapi.com/products/${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div className="product-detail text-center w-50 m-auto p-5">
      <img className="product-img" src={item.image} alt="Product" />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>$ {item.price}</p>
      <button
        className="btn-primary rounded"
        onClick={() => addToCart({ ...item, count: 1 })}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
