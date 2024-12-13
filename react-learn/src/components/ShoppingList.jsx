import React, { useState } from "react";


const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !quantity) return;

    const newItem = { name, quantity : parseInt(quantity) >0 ? parseInt(quantity) : 0 };

    setItems([...items, newItem]);
    setName("");
    setQuantity("");

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name" 
          name="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Quantity"
            name="quantity"
          value={quantity}
          onChange={handleChange}
        />

        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
