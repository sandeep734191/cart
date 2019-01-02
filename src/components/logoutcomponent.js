import React from 'react';
import {connect} from 'react-redux'
import { userActions } from '../actions/useractions';
class logoutComponent extends React.Component{


    fun(dispatch){
        dispatch(userActions.logout())
    }
        render(){

        
            return (<div onClick={()=>{this.fun(this.props.dispatch)}}style={{backgroundClip:'black'}}><h3>logged out</h3></div>)

            }
        
    
}
export default connect()(logoutComponent);