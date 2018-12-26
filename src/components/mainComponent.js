import React from 'react';
import {connect} from "react-redux";

import ProductContainer from '../containers/productcontainer';

class MainComponent extends React.Component {
    state = {  }
    
    render() { 
        console.log("in main component");
        return (<div>
            <br></br>
            <ProductContainer></ProductContainer>
            </div>  );
    }
}
 
export default MainComponent;