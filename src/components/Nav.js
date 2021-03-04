import '../styles/Nav.css';
import { Link } from 'react-router-dom'

function Nav(cartInfo) {
  let items = cartInfo.cartInfo.itemsCount;
  return (
    <header className="nav">
    <h1>nav hello</h1>
    <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Products</Link></li>
    <li><Link to='/cart'>Cart {items !== 0 ? `${items}` : null}</Link></li>
    </ul>
    </header>
  );
}

export default Nav;
