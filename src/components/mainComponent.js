import React from 'react';
import { connect } from "react-redux";

import ProductContainer from '../containers/productcontainer';
import MenuContainer from '../containers/menucontainer';

class MainComponent extends React.Component {
    state = {}

    render() {
        console.log("in main component");
        return (
            <div>
                <MenuContainer></MenuContainer>
            </div>);
    }
}

export default MainComponent;