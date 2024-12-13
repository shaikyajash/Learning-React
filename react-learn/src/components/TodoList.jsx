import React, { useState } from "react";

const TodoList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };


  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h2>To do List:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue}  onChange={handleChange} placeholder="Add a new todo" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;           
