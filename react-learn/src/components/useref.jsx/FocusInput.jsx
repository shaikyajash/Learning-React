import React, { useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef(null);
    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

  return (
    <div>

        <input type="text" ref={inputRef} placeholder='Click the button to Focus'/>
        <button onClick={()=>focusInput()} >Focus</button>

    </div>
  )
}

export default FocusInput