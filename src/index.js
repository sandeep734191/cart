import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import App from './rootComponent/app';
import allReducers from './reducers/combine-reducers';
import LoginComponent from './components/logincomponent';
import RegisterComponent from './components/registercomponent';

console.log("before store creations")
const reduxStore=createStore(allReducers)

console.log("before index")

ReactDOM.render(
<Provider store={reduxStore}>
<App></App>
</Provider>
    ,
    document.getElementById("root"));
    console.log("after index")

//ReactDOM.render(<LoginComponent></LoginComponent>,document.getElementById('login'));
//ReactDOM.render(<RegisterComponent></RegisterComponent>,document.getElementById('registration'));
