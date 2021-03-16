// import React from 'react';

// import { createStore } from 'redux';
// import reducer from "./store/reducer";


const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    if(action.type === "INCREMENT"){
        return {
            ...state, counter: state.counter + action.value
        }
    }
    if(action.type === "DECREMENT"){
        return {
            ...state, counter: state.counter - action.value
}
    }
    return state

}
export default rootReducer;