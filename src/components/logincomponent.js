import React from 'react';
class LoginComponent extends React.Component {
    state = {}
    render() {
        return (<div style={{marginLeft:200,marginBottom:200,marginTop:100}}>
            <form class=""action="">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>


        );
    }
}

export default LoginComponent;