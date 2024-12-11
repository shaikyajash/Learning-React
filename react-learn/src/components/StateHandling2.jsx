import React from 'react'

const StateHandling2 = ({number, onClickHandler}) => {

    const handleClick = () => { onClickHandler() }
    

  return (

    <div>
        <p>{number}</p>
        <button onClick={handleClick}> Increment </button>    
    </div>

  )
}

export default StateHandling2