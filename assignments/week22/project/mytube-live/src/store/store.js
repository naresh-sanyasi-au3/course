import { createStore, combineReducers } from "redux";

import videoReducer from "./reducers/videosReducers";

let reducer = combineReducers({
    videos: videoReducer
});

let store = createStore(reducer);

store.subscribe(() => {
    console.log("disptched: ", store.getState());
})

function stateMapper(state){
    return state
}

export {store, stateMapper};