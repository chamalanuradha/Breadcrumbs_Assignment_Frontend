import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css'

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/products', {
      name,
      price,
      description
    }).then(response => {
      navigate('/');
    }).catch(error => {
      console.error('Error adding product:', error);
    });
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
        <input type="text" 
        placeholder="Product Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        required />

        <input type="number" 
        placeholder="Price" 
        value={price} 
        onChange={e => setPrice(e.target.value)} 
        required />

        <textarea 
        placeholder="Description" 
        value={description} 
        onChange={e => setDescription(e.target.value)} 
        required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
