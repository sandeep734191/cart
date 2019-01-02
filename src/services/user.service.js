import axios from 'axios';
import jwt from 'jsonwebtoken'

import setAuthorizationToken from '../actions/authorisation';
var jwt_decode = require('jwt-decode');

export const userService = {
    login,
    logout,
    register
    
}
function login(username, password) {
     return  axios.post('http://localhost:4000/old',{'user':username,'pwd':password}).then((res)=>{
        
        const token =res.data.token;
        localStorage.setItem('jwtToken',token);
        setAuthorizationToken(token);
        console.log('from userservice'+ jwt_decode(token));
        return jwt_decode(token);
        
    })
    
}

function logout() {
    
    localStorage.removeItem('jwtToken');
    console.log('token removed from local storeage');
    
}



function register(user) {
    return axios.post('http://localhost:4000/add',user).then((data)=>{
        
        console.log(data.data);
    
    })
}

