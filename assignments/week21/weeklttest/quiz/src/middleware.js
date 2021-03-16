
import { } from './constants/actionTypes';

const promiseMiddleware = store => next => action => {
    
    next(action);
};

export { promiseMiddleware }