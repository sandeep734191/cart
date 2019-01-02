import { combineReducers } from 'redux';
import MovieReducers from './reducer-movies';
import UserReducers from './reducer.-user';
import reduceMaths from './reduce-arithmetic';
import reduceCart from './reduce-cart';
import userSearch from './reducer_usersearch';
import auth from './reducer-auth';



const allReducers = combineReducers({
    users:UserReducers,
    movies:MovieReducers,
    arithmetic:reduceMaths,
    cart:reduceCart,
    result:userSearch,
    credit:auth
    
    
})
console.log("in combine-reducers");

export default allReducers;

 