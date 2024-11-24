import React from 'react'

const myName = 'John';
const multiply = (a,b) => a*b;
const specialClass = 'simple-class';





const DynamicContent = () => {
  return (
    <section>
        <p>2+2 = {2+2}</p>
        <h1> {myName} </h1>
        <p>My Friends: {["Alex", "jhon" , "waheed" ,"Jordan"]}</p>
        <p>2 * 2 = {multiply(2,2)}</p>
        <p className={specialClass} >This is special Class</p>


    </section>

  )
}

export default DynamicContent