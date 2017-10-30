import { createStore, combineReducers, applyMiddleware } from 'redux'
import {employees, page} from './reducers';

const saver = store => next => action => {
  let result = next(action);

  localStorage['redux-store'] = JSON.stringify(store.getState());

  return result;
};

const storeFactory = (initialState = {})=> (
  applyMiddleware(saver)(createStore)(
    combineReducers({employees, page}),
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState
  )
);

export default storeFactory;
