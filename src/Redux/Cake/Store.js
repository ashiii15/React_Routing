import { legacy_createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import CakeReducer from './CakeReducer'
 export const store = legacy_createStore (CakeReducer,composeWithDevTools(applyMiddleware(logger)))
 export default store
