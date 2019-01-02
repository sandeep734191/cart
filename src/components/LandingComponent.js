import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class LandingComponent extends React.Component {
    state = {}
    render() {

        return (
            <div class="container-fluid mt-5 mb-5 pt-3 pb-3 bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>Hello world</h5>
                        </div>
                        <div class="col-md-4">
                            <Link to="/login">Sign in</Link>
                        </div>
                        <div class="col-md-4">
                            <Link to="/register">Register</Link>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

function mapstatetoprops(store) {
    return {
        auth: store.auth
    }
}
export default connect(mapstatetoprops)(LandingComponent);

