import {
  createStore,
  applyMiddleware,
  combineReducers
}                              from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk                   from 'redux-thunk';
import * as reducers           from './reducers';


const data=combineReducers({ ...reducers });
const enhancer=composeWithDevTools(applyMiddleware(thunk));

export const store=createStore(data, enhancer);