import React from 'react';
import { connect } from 'react-redux';
import {
    Button, Row, Col, Grid, Jumbotron, Media,
    ButtonToolbar, ButtonGroup, Glyphicon, Alert, Navbar, NavItem, Image, Nav, NavDropdown, MenuItem
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import AddToCart from '../actions/userclicktocart';
import removeFromCart from '../actions/removeItemfromCart';
import inc_item_in_cart from '../actions/inc_item';
import dec_item_in_cart from '../actions/dec_item';
import userSearch from '../actions/user_search';
import '../styles.css';

class ProductContainer extends React.Component {

    //not using this style
    constructor(props) { 
        super(props);
        this.state = {
            isLoading: false,
            call: ""
        };

        this.renderUser = this.renderUser.bind(this);
        this.renderCart = this.renderCart.bind(this);
        this.fun = this.fun.bind(this);
        this.f1 = this.f1.bind(this);
    }
    style = {

        width: 600,
        height: 300,
        backgroundColor: 'lightblue',
        margin: 200
    }
    style2 = {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        display: 'inline-block',
        margin: 30

    }
    btnstyle = {
        margin: 15
    }

    f1(u) {
        this.setState({
            isLoading: false,

        });
        this.props.addToCart(u);
    }
    fun(u) {
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.f1(u)
        }, 500)



        console.log('hello friends');

        //  this.props.addToCart(u);
    }
    renderUser() {
        const isLoading = this.state.isLoading;
        if(this.props.my_search_results===null)
        {
            return this.props.movie_users.map((u) => {
                return (
                    <div style={this.style2} key={u.id}>
                        {u.movie}
                        <br></br>
                        <Button style={this.btnstyle} bsStyle="danger" bsSize="small" disabled={isLoading} onClick={() => !isLoading ? this.fun(u) : null}>{isLoading ? 'ADDING...' : 'ADD'}</Button>
                    </div>
                )
            })

        }
        else{
            return this.props.movie_users.map((u) => {
                console.log(u.name + this.props.my_search_results.name);
                if(u.movie===this.props.my_search_results.name){
                    return (
                        <div style={this.style2} key={u.id}>
                            {u.movie}
                            <br></br>
                            <Button style={this.btnstyle} bsStyle="danger" bsSize="small" disabled={isLoading} onClick={() => !isLoading ? this.fun(u) : null}>{isLoading ? 'ADDING...' : 'ADD'}</Button>
                        </div>
                    )
                }
                return null;
                
            })

        }
       
    }
    renderCart() {

        console.log('length issssssssssssssssssssssss' + this.props.cart_items.length);

        return this.props.cart_items.map((u) => {
            return (
                <div key={u.id} style={{ margin: 10, width: 200, height: 200, paddingRight: 20, paddingLeft: 0 }}>
                    <Media>
                        <Media.Left>
                            <img class="border border-dark" width={80} height={80} style={{ padding: 0, margin: 20 }} src="/dhoni.png" alt="dhoni" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>
                                {u.movie}
                            </Media.Heading>
                            <p>
                                price :10rs
                            </p>
                        </Media.Body>
                    </Media>
                    <div>
                        <ButtonToolbar>
                            <ButtonGroup>

                                <Button class="border border-danger" onClick={() => this.props.dec_item(u)}>
                                    <Glyphicon glyph="minus" />
                                </Button>

                                <Button disabled={true}>{u.count}
                                </Button>

                                <Button class="border border-danger" onClick={() => this.props.inc_item(u)}>
                                    <Glyphicon glyph="plus" />
                                </Button>

                            </ButtonGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button bsStyle="danger" bsSize="small" onClick={() => this.props.removeItem(u)}>
                                remove
                            </Button>
                        </ButtonToolbar>


                    </div>



                </div>
            )
        })

        return null;


    }
    search(e)
    {
        e.preventDefault();
        var obj={'name':document.getElementById('query').value};
        this.props.search_query(obj);
    }

    render() {
        return (
            <div>


                <nav class="navbar navbar-expand-sm bg-danger navbar-dark sticky-top">


                    {/*<img src="dhoni.png" alt="logo" style={{width:40,margin:10}} class="rounded-circle" />*/}


                    {/* sample comment */}

                    <ul class="navbar-nav " >
                        <li class="nav-item active" style={{ marginRight: 30 }} >
                            <a class="nav-link" >KIT</a>
                        </li>

                    </ul>
                    <form class="form-inline " action="" >

                        <input class="form-control col-sm-8 mr-sm-3 " type="text" placeholder="Search" id="query"/>

                        <button class="btn btn-primary" type="submit" onClick={(e)=>this.search(e)}>
                            Search</button>

                    </form>


                    <ul class="navbar-nav ml-auto" >
                        <li class="nav-item active " >
                            <a class="nav-link" >Signin</a>
                        </li>
                        <li class="nav-item active" >
                            <a class="nav-link" >Register</a>
                        </li>

                    </ul>

                </nav>






                <Grid class="border border-dark" responsive fluid >

                    <Row responsive class="hello">
                    <Col xs={3} md={2} responsive>
                            <Jumbotron>
                               
                                <p>
                                    <Button bsStyle="primary">Learn more</Button>
                                </p>
                            </Jumbotron>

                        </Col>

                        <Col xs={6} md={6} responsive>
                            <Jumbotron>

                                {this.renderUser()}
                            </Jumbotron>
                        </Col>
                        
                        <Col xs={3} md={4} responsive fluid>

                            <Jumbotron >
                                {/*<Alert style={{ textAlign: 'center', width: 200 }} bsStyle="danger">cart</Alert>*/}
                                <button type="button" class="btn btn-dark">CART</button>
                                <p >{this.renderCart()}</p>

                            </Jumbotron>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );

    }
}


function converstoretoprops(store) {
    return ({
        movie_users: store.movies,
        cart_items: store.cart,
        my_search_results:store.result
    })
}

function mapPropsToActionAndDespatchThem(dispatch) {
    return bindActionCreators({
        addToCart: AddToCart,
        removeItem: removeFromCart,
        inc_item: inc_item_in_cart,
        dec_item: dec_item_in_cart,
        search_query:userSearch


    }, dispatch)
}
export default connect(converstoretoprops, mapPropsToActionAndDespatchThem)(ProductContainer);