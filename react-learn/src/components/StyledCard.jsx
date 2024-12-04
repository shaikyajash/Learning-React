import React from 'react'
import { BiBorderAll } from 'react-icons/bi';

const StyledCard = () => {

    const styles={
        background : "lightblue",
        padding : "20px",
        borderRadius :"10px",
        color :"darkblue",

    }


  return (

    <div style={styles} >
        <h1>Styled component</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eveniet accusamus quidem nulla est veniam veritatis ad dicta velit? Itaque. </p>

    </div>


  )
}

export default StyledCard;