import React from 'react';
class RegistrationComponent extends React.Component {
    state = {}
    render() {
        return (
            <div style={{ marginLeft: 200, marginBottom: 200, marginTop: 100, backgroundColor: 'gray', width: 700, height: ' auto' }}>
                <h1 style={{ textAlign: 'center', paddingTop: 10 }}>SignUp Form</h1>
<div style={{align:'center'}}>
                <form class="" action="" >
                    
                        <div  class="form-group">
                            <label  for="name">Name:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label  for="email">Email address:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label   for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                
                    
                    <div style={{ textAlign: 'center', backgroundColor: 'green' }}>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default RegistrationComponent;