import React from 'react';
class RegistrationComponent extends React.Component {
    state = {}
    render() {
        return (
            <div style={{ marginLeft: 200, marginBottom: 200, marginTop: 100 }}>
                <h1 >SignUp Form</h1>
                <div style={{ align: 'center' }}>
                    <form class=""  >

                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <div class="btn-toolbar">
                            <button type="submit" id="myButton" class="btn btn-primary" formAction="/" >Home</button>

                            <button type="submit" class="btn btn-primary" formAction="/">Submit</button>

                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default RegistrationComponent;