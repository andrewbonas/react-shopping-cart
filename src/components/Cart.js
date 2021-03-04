import '../styles/Cart.css';

const Cart = ({cart, cartInfo, increaseCount, decreaseCount, removeItem}) => {
  console.log(cartInfo);
  console.log(cart.cart);
  return (
    <div className="cart-body">
    {cart.map(item => (
      <div>
      <img src={item.image} alt="Product"/>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <p>{item.count}</p>
      <button onClick={() => removeItem(item.id)}>Remove</button>
      <button onClick={() => increaseCount(item.id)}>Add</button>
      <button onClick={() => decreaseCount(item.id)}>Subtract</button>

<div>Check Out</div>
<div>Cart Count: {cartInfo.itemsCount}</div>
<div>Total: {cartInfo.totalPrice.toFixed(2)}</div>
<button>Check Out</button>
      </div>
    ))}
         </div>
  );
};

export default Cart;
