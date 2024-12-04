import React from "react";

const Person = ({name , age}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age} </p>
    </div>
  );
};



export default Person;


// if you pass the props in parent by closing tag instead of self closing tag then you have to use "children" in child component to get the value of props
// for example:
// // App.js
// import Person from "./components/Person";
// const App = () => {
//   return (
//     <div>
//       <Person name="John" age="25">
//         <p>This is the child component</p>
//       </Person>
//     </div>
//   );
// };

// const Person = ({children}) => {
//   return (
//     <div>
//   children
//   </div>
//  );
// };