import React from "react";
import { data , data1 } from "./ComponentA";
import { useContext } from "react";


const ComponentC = () => {

const username = useContext(data);
const age = useContext(data1);

  return (
    <div>
      <h1> My name is: {username} and i'm {age} years old </h1>
    </div>
  );
};

export default ComponentC;
