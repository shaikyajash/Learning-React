import React, { useReducer } from 'react'


const initialState = {count : 0};

//  # what to updtae and how to update
const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return {...state, count: state.count+1};
            
        case 'decrement':
            return {...state, count: state.count-1};
        
        case 'reset':
            return{...state, count: 0};
    
        default:
            return state;
    }

};



const Reducer = () => {  

    const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div>
        <button onClick={()=>dispatch({type:"increment"})} >Plus</button>
        <button onClick={()=>dispatch({type:"decrement"})} >Minus</button>
        <button onClick={()=>dispatch({type:"reset"})} >Reset</button>

        <h1>Count: {state.count}</h1>
        
        
    </div>
  )
}

export default Reducer