import React, { useState } from "react";

const StateHandling = () => {
  const [count, setCount] = useState(0);
  const increament = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const [friends, setFriends] = useState(["John", "Doe", "Jane"]);

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increament}> + </button>
      <button onClick={decrement}> - </button>

      <div>
        {friends.map(f => (
            <li key ={Math.random()}>{f}</li>
           
        ))}
      </div>
    </section>
  );
};

export default StateHandling;
