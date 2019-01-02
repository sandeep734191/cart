import React from 'react';
import { Link, Switch, Route, HashRouter } from 'react-router-dom';
import LoginComponent from '../components/logincomponent';
import RegisterComponent from '../components/registercomponent';
import HelloComponent from '../components/hellocomponent';
import ProductContainer from './productcontainer';
import LandingComponent from '../components/LandingComponent';

class MenuContainer extends React.Component {
    state = {}
    render() {
        return (
            <HashRouter>

                <Switch>
                    <Route path="/login" component={LoginComponent}></Route>
                    <Route path="/register" component={RegisterComponent}></Route>
                    <Route path="/product" component={ProductContainer}></Route>
                    <Route exact path="/" component={LandingComponent}></Route>

                </Switch>
            </HashRouter>


        );
    }
}

export default MenuContainer;