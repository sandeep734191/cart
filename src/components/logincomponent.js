import React from 'react';
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.captureName = this.captureName.bind(this);
        this.capturePassword = this.capturePassword.bind(this);
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
        e.preventDefault();
        console.log('user details fetched')
    }
    render() {
        return (<div style={{ marginLeft: 200, marginBottom: 200, marginTop: 100 }}>
            <form class="" onSubmit={this.userdetails} >
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" onChange={this.captureName} />

                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" onChange={this.capturePassword} />



                </div>
                <div class="btn-toolbar">
                    <button type="submit" id="myButton" class="btn btn-primary" formAction="/" onClick={(e)=>this.userdetails(e)} >Home</button>
                    <button type="submit" class="btn btn-primary" formAction="/">Submit</button>



                </div>
            </form>

        </div>


        );
    }
}

export default LoginComponent; 