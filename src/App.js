import './styles/App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      test App
      </header>
      <Link to='/cart'>Cart</Link>
    </div>
  );
}

export default App;
