import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import App from './rootComponent/app';
import allReducers from './reducers/combine-reducers';
import LoginComponent from './components/logincomponent';
import RegisterComponent from './components/registercomponent';
import setAuthorizationToken from './actions/authorisation';


import {userActions} from './actions/useractions';
var jwt_decode=require('jwt-decode')
console.log("before store creations")
const reduxStore=createStore(
    allReducers,
    applyMiddleware(thunk)
)

console.log("before index")
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    reduxStore.dispatch(userActions.setCurrentUser(jwt_decode(localStorage.jwtToken)))
}

ReactDOM.render(
<Provider store={reduxStore}>
<App></App>
</Provider>
    ,
    document.getElementById("root"));
    console.log("after index")

//ReactDOM.render(<LoginComponent></LoginComponent>,document.getElementById('login'));
//ReactDOM.render(<RegisterComponent></RegisterComponent>,document.getElementById('registration'));
