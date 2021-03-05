import "./styles/App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="display-1">React Shop</h1>
          <Link to="/products">
            <button className="btn btn-secondary btn-lg m-4">View Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
