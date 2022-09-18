import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk"

import { reducer as AuthReducer } from "./AuthReducer/reducer" 

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const rootReducer = combineReducers( AuthReducer);

export const store = legacy_createStore( rootReducer, composeEnhancers(applyMiddleware(thunk))) 