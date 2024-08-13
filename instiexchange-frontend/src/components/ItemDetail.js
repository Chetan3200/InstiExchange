import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItem } from '../api';

function ItemDetail() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem(id);
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <p>Description: {item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Condition: {item.condition}</p>
      <p>Owner: {item.owner}</p>
      <p>Listed on: {new Date(item.created_at).toLocaleDateString()}</p>
    </div>
  );
}

export default ItemDetail;