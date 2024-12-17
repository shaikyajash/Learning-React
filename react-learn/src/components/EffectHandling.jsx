import React, { useEffect, useState } from "react";

const EffectHandling = () => {
  const [value, setValue] = useState(0);


  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value] );
//   this is the 2nd argument which we provide so that this only fires when the state value changes

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};

export default EffectHandling;
