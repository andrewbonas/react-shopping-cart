import React, {useState, useEffect} from "react";
import { trackPromise } from 'react-promise-tracker';
import '../styles/Products.css';
import { Link } from 'react-router-dom'



function Products() {

  useEffect(()  => {
    trackPromise(
    fetchItems()
  );
},[]);

  const [items, setItems] = useState([]);

const fetchItems = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const items = await data.json();
  setItems(items);
};

  return (
    <div className="product">
    {items.map(item => (
      <div>
      <h1>
      <Link key="{item.id}" to={`/product/${item.id}`}>
      <img src={item.image} alt="Product"/>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      </Link>
      </h1>
      </div>
    ))}
    </div>
  );
}

export default Products;
