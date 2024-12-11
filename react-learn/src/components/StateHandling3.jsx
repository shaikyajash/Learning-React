import React from 'react'






const StateHandling3 = ({number, onClickHandler}) => {
  return (
    <div>
        <p>{number}</p>
        <button onClick={onClickHandler}> Increment </button>
    </div>
  )
}

export default StateHandling3;
