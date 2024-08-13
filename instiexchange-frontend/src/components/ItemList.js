import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getItems } from '../api';

function ItemList() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems(searchTerm);
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchItems();
  };

  return (
    <div className="item-list">
      <h2>Available Items</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Condition: {item.condition}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;