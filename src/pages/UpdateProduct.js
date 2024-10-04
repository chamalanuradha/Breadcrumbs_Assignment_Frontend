import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/products/${id}`, {
      name,
      price,
      description
    }).then(response => {
      navigate('/productlist');
    }).catch(error => {
      console.error('Error updating product:', error);
    });
  };

  return (
    <div className="update-product">
      <h2>Update Product</h2>
      <form onSubmit={handleUpdateProduct}>
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

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
