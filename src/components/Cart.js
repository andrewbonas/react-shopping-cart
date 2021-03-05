import "../styles/Cart.css";

const Cart = ({
  cart,
  cartInfo,
  increaseCount,
  decreaseCount,
  removeItem,
  checkoutItems,
}) => {
  console.log(cartInfo);
  console.log(cart.cart);
  return (
    <div className="cart-body">
      {cart.map((item) => (
        <div>
          <div className="cart-item d-flex justify-content-between align-items-center border-bottom p-3 m-2">
            <img src={item.image} alt="Product" />
            <div className=" d-flex justify-content-around align-items-baseline">
              <p>$ {item.price.toFixed(2)}</p>
              <div className="d-flex align-items-baseline">
                <button
                  className="btn btn-count btn-dark rounded-circle font-weight-bold text-center"
                  onClick={() => decreaseCount(item.id)}
                >
                  -
                </button>
                <p>{item.count}</p>
                <button
                  className="btn btn-count btn-dark rounded-circle font-weight-bold text-center"
                  onClick={() => increaseCount(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            {item.title.length > 30 ? (
              <h6>{item.title.substring(0, 27) + "..."}</h6>
            ) : (
              <h6>{item.title}</h6>
            )}
            <button
              className="btn btn-danger rounded"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end p-3 text-center">
        <div className="flex-column">
          <h4>Check Out</h4>
          <div>Cart Items: {cartInfo.itemsCount}</div>
          <div>Total: $ {cartInfo.totalPrice.toFixed(2)}</div>
          {cart.length > 0 ? (
            <button
              className="btn-info rounded m-2"
              onClick={() => checkoutItems()}
            >
              Checkout
            </button>
          ) : (
            <button className="btn-light rounded m-2" disabled>
              Nothing in Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
