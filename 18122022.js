import React, {useReduce} frmo 'react';
cont initialState = { counter:0};
const counterReducer = ( state, action) =>
{
    switch(action.type){
        case 'INCREMENT':
            return { counter:state.counter+1};
            case 'DECREMENT':
            return { counter:state.counter-1};
            default: 
            return state;
    }
}
function CounterApp(){
    const[state dispatch]=useReducer(counterReducer,initialState);

    return(
        <div>
        <span id = "counter">{state.counter}</span>
        <button id ="increment-btn" onClick={() => dispatch ({type : 'DECREMENT'})}> Decrement </button>
        </div>
        );
    };
    export default CounterApp;
