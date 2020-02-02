import { createStore, combineReducers } from "redux";
//import all of the different reducers here and combine them
import userReducer from './user';
//import gameReducer from './game';

const rootReducer = combineReducers( {
  userReducer,
  // gameReducer,
} );

export default createStore(rootReducer);