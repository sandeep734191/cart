import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import  {userActions} from '../actions/useractions';
import { bindActionCreators } from 'redux';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.captureName = this.captureName.bind(this);
        this.capturePassword = this.capturePassword.bind(this);
        this.userdetails=this.userdetails.bind(this);
    }
    capturePassword(e) {
        console.log('name is ' + e.target.value)
        this.setState({
            password: e.target.value
        })
    }
    captureName(e) {
        console.log('name is ' + e.target.value)
        this.setState({
            username: e.target.value
        })
    }
    userdetails(e)
    {
        alert('fun')
        e.preventDefault();
        console.log('user details fetched')
        //this.props.userActions();
        const {dispatch}=this.props;
        dispatch(userActions.login(this.state.username,this.state.password));
    
        let path = `/product`;
        this.props.history.push(path);
        
    }
    customlogin()
    {
        console.log('condition si'+this.props.credentials.isAuthenticated)
        if(this.props.credentials.isAuthenticated){
           
            return(<div>
                <h3>user already logged in</h3>
                <h3>{this.props.credentials.user}</h3>
                
                </div>)
        }else{

        
        return (
            <div style={{ marginLeft: 200, marginBottom: 200, marginTop: 100 }}>
            <form class="" onSubmit='/product' >
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" onChange={this.captureName} />

                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" onChange={this.capturePassword} />



                </div>
                <div class="btn-toolbar">
                    <button type="submit" id="myButton" class="btn btn-primary"  >Home</button>
                    <button type="submit" class="btn btn-primary"  onClick={(e)=>this.userdetails(e)}>Submit</button>



                </div>
            </form>

        </div>
        )
    }
    }
    render() {
        return (<div>
                    {this.customlogin()}
</div>
        );
    }
}
function mapStateToProps(store){
    return ({
        value:store.arithmetic,
        credentials:store.credit
    })
}



export default connect(mapStateToProps)(LoginComponent); 