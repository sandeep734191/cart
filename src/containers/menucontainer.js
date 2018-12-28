import React from 'react';
import { Link, Switch, Route,HashRouter } from 'react-router-dom';
import LoginComponent from '../components/logincomponent';
import RegisterComponent from '../components/registercomponent';
import HelloComponent from '../components/hellocomponent';

class MenuContainer extends React.Component {
    state = {}
    render() {
        return (<HashRouter><div>
            <ul >
                <li><Link to="/">hello</Link></li>
                <li><Link to="/login">Sign in</Link></li>
                <li><Link to="/register">Sign up</Link></li>
            </ul>
            <Switch>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/register" component={RegisterComponent}></Route>
                <Route exact path="/" component={HelloComponent}></Route>
            </Switch>
            </div>
        </HashRouter>
        );
    }
}

export default MenuContainer;