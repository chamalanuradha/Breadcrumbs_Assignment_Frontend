import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const token = localStorage.getItem('token'); 

      try {
        await axios.delete(`http://127.0.0.1:8000/api/products/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <Link to="/addproduct" className="btn-add">Add Product</Link>
      <div className="product-cards">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/updateproduct/${product.id}`} className="btn-edit">Edit</Link>
            <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
