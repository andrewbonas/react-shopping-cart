import React, {useState, useEffect, useContext} from "react";
import { trackPromise } from 'react-promise-tracker';
import '../styles/Products.css';
import { Link } from 'react-router-dom'



function Product({ match, addToCart }) {
  useEffect(()  => {
    trackPromise(
    fetchItem()
  );
  },[]);

  const [item, setItem] = useState([]);

const fetchItem = async () => {
  const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const item = await fetchItem.json();
setItem(item);
};

  return (
    <div className="product-detail">
<img src={item.image} alt="Product"/>
<h1>{item.title}</h1>
<p>{item.description}</p>
<p>$ {item.price}</p>
<button onClick={() => addToCart({...item, count: 1})}>Add to cart</button>

    </div>
  );
}

export default Product;
