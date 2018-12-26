import { combineReducers } from 'redux';
import MovieReducers from './reducer-movies';
import UserReducers from './reducer.-user';
import reduceMaths from './reduce-arithmetic';
import reduceCart from './reduce-cart';

const allReducers = combineReducers({
    users:UserReducers,
    movies:MovieReducers,
    arithmetic:reduceMaths,
    cart:reduceCart
})
console.log("in combine-reducers");

export default allReducers;

