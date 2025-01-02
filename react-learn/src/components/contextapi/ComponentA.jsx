import React from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

export const data = createContext();
export const data1 = createContext();

const ComponentA = () => {
  const name = "John";
  const age = 22;

  return (
    <div>

      <data.Provider value={name}>
        <data1.Provider value={age}>
          <ComponentB />
        </data1.Provider>
      </data.Provider>
      
    </div>
  );
};

export default ComponentA;
