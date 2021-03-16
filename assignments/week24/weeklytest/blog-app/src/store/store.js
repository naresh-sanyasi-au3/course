import { createStore, combineReducers } from "redux";
import blogReducer from './reducers/blogReducer';


let reducer = combineReducers({
  blog: blogReducer,
});

let store = createStore(reducer);

store.subscribe(() => {
  console.log("disptched: ", store.getState());
})

function stateMapper(state) {
  return state;
}

export {store, stateMapper};

