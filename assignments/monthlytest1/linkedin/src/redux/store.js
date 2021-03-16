import { createStore, combineReducers } from 'redux';
import usersReducer from './usersReducer';

let reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state:', store.getState());
});

export { store };
