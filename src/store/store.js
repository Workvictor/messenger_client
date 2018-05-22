import {
  createStore,
  applyMiddleware,
  combineReducers
}                              from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk                   from 'redux-thunk';
import * as reducers           from './reducers';


const { env }=process;
const data=combineReducers({ ...reducers });
const enhancer=env.NODE_ENV === `development` ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

export const store=createStore(data, enhancer);