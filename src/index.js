import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import App from './rootComponent/app';
import allReducers from './reducers/combine-reducers';
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