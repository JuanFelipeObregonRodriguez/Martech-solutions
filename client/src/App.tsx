import { useState, useEffect } from "react";
import ProductForm from "./components/Form";
import Round from "./assets/Round.jpg";
import "./App.css";
import ProductTable from "./components/Table";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Get all categories from the database.
    void axios
      .get("/Api")
      .then((response) => response.data)
      .then((categories) => setProducts(categories));
  }, []);

  return (
    <>
      <div>
        <header className="bg-black">
          <h1>style</h1>
          <img src={Round} alt="" />
        </header>
        <div className="form">
          <ProductForm />
        </div>
        <div className="table">
          {products.length > 0 ? <ProductTable /> : <h2>No hay productos</h2>}
        </div>
        <footer className="bg-black">Terms and conditions</footer>
      </div>
    </>
  );
}

export default App;
