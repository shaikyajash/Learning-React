import React, { useRef } from 'react'

const ref = () => {

    const inputElement  = useRef(null);

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "ajas";
    }

  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={()=>focusInput()}>Focus and write ajas</button>
    </div>
  )
}

export default ref