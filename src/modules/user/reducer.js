import { combineReducers } from "redux";
import types from "./types";

// /* State Shape
// {
//     quacking: bool,
//     distance: number
// }
// */

// const quackReducer = ( state = false, action ) => {
//     switch( action.type ) {
//         case types.QUACK: return true;
//         /* ... */
//         default: return state;
//     }
// }

// const distanceReducer = ( state = 0, action ) => {
//     switch( action.type ) {
//         case types.SWIM: return state + action.payload.distance;
//         /* ... */
//         default: return state;
//     }
// }

const userReducer = combineReducers( {
    // quacking: quackReducer,
    // distance: distanceReducer
} );

export default userReducer;

/*
It's very important that the reducer stays pure. Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
*/