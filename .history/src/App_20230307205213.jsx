import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/products">Products</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
