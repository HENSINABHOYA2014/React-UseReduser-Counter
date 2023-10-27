import { useReducer } from "react";

const initialState = 0;
const Reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        default:
            return state;
    }
}
const CustomReducer=()=>{
    const [no,dispatch]=useReducer(Reducer,initialState);
    const clickPlus=()=>{
        dispatch({
            type:'INCREMENT'
        })
    }
    const clickMinus=()=>{
        dispatch({
            type:'DECREMENT'
        })
    }
    return(
        <>
         <center>
         <h1>Counter app</h1>
          <button onClick={clickPlus }>+</button>&nbsp;
          <button onClick={ clickMinus}>-</button>

          <h1>Count :- {no}</h1>
         </center>
        </>
    )
}
export default CustomReducer;
