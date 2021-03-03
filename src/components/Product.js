import React, {useState, useEffect} from "react";
import '../styles/Products.css';
import { Link } from 'react-router-dom'



function Product({ match }) {
console.log(match);
  useEffect(()  => {
    fetchItem();
  },[]);

  const [item, setItem] = useState([]);

const fetchItem = async () => {
  const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    const item = await fetchItem.json();
setItem(item);
    console.log(item);
};

  return (
    <div className="product-detail">
<img src={item.image} alt="Product"/>
<h1>{item.title}</h1>
<p>{item.description}</p>
<p>{item.price}</p>
<button>Add to cart</button>

    </div>
  );
}

export default Product;
