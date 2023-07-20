import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductTable = () => {
  const [product, setProduct] = useState({
    id: "",
    fecha_creacion: "",
    nombre: "",
    categoria: "",
    precio: "",
    valor: "",
    stock: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Get all categories from the database.
    void axios
      .get("/Api")
      .then((response) => response.data)
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <h1>Product Form</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Value</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {product && (
            <tr>
              <td>{product.nombre}</td>
              <td>{product.categoria}</td>
              <td>{product.precio}</td>
              <td>{product.valor}</td>
              <td>{product.stock}</td>
            </tr>
          )}
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </div>
  );
};

export default ProductTable;
