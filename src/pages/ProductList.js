import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <Link to="/add-product" className="btn-add">Add Product</Link>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/edit-product/${product.id}`} className="btn-edit">Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
