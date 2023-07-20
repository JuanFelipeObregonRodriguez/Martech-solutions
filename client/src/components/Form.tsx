import React, { useState, useEffect } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import axios from "axios";

const ProductForm = () => {
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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Submit the product to the database using Axios.
    try {
      const response = await axios.post("/Api", {
        nombre: product.nombre,
        categoria: product.categoria,
        precio: product.precio,
        valor: product.valor,
        stock: product.stock,
      });

      // Redirect to the product details page.
      window.location.href = `/products/${response.data.id}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Product Form</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormControl
            label="Name"
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="category">
          <FormControl
            label="Category"
            type="select"
            name="categoria"
            value={product.categoria}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.nombre}>
                {category.nombre}
              </option>
            ))}
          </FormControl>
        </FormGroup>
        <FormGroup controlId="price">
          <FormControl
            label="Price"
            type="number"
            name="precio"
            value={product.precio}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="value">
          <FormControl
            label="Value"
            type="number"
            name="valor"
            value={product.valor}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="stock">
          <FormControl
            label="Stock"
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default ProductForm;
