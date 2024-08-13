import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../api';

function ItemForm() {
  const [item, setItem] = useState({ title: '', description: '', condition: '', price: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem(item);
      navigate('/');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={item.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={item.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="condition">Condition:</label>
          <input type="text" id="condition" name="condition" value={item.condition} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={item.price} onChange={handleChange} required />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ItemForm;