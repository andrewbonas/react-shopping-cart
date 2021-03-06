import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav(cartInfo) {
  const cart = <FontAwesomeIcon icon={faShoppingCart} />;
  let items = cartInfo.cartInfo.itemsCount;
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-items-baseline">
      <h1 className="navbar-brand">React Shop</h1>
      <ul className="navbar-nav">
        <li>
          <Link className="nav-item text-dark p-2 text-decoration-none" to="/react-shopping-cart/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-item text-dark p-2 text-decoration-none"
            to="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className="nav-item text-dark p-2 text-decoration-none"
            to="/cart"
          >
            {cart} {items !== 0 ? `${items}` : null}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
