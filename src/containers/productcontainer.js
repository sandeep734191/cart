import React from 'react';
import { connect } from 'react-redux';
import { Link, HashRouter } from 'react-router-dom';
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
import ChangeState from '../actions/change_state';
import ChangeStateT from '../actions/change_state_t';
import '../styles.css';
import { userActions } from '../actions/useractions';

class ProductContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            call: ""
        };

        this.renderUser = this.renderUser.bind(this);
        this.renderCart = this.renderCart.bind(this);
        this.fun = this.fun.bind(this);
        this.f1 = this.f1.bind(this);
        this.logout = this.logout.bind(this);
        this.automate=this.automate.bind(this);
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
        margin: 15,
        float: 'right'
    }

    f1(u) {

        this.props.changeState(u);
        this.props.addToCart(u);
    }

    fun(u) {

        this.props.changeStateT(u);
        setTimeout(() => {
            this.f1(u)
        }, 500)
    }

    renderUser() {

        if (this.props.my_search_results === null) {
            
            return this.props.movie_users.map((u) => {
                return (
                    <div class="heroes card" key={u.id} >
                        <img src={"/"+u.img} alt=""  class="card-img-top" />
                        <div class="card-body">
                            <h5> {u.movie}</h5>
                            <h5> &#8377;{u.price}</h5>
                            <button class="btn btn-danger" disabled={u.isLoading} onClick={() => !u.isLoading ? this.fun(u) : null}><i class="fa fa-cart-plus" area-hidden="true"></i>
                                {u.isLoading ? 'ADDING...' : 'ADD'}</button>
                        </div>
                    </div>
                )
            })

        }
        else {
           
            return this.props.movie_users.map((u) => {
       
                if ((u.movie).startsWith(this.props.my_search_results)) {
                    return (

                        <div class="heroes card" key={u.id} >
                            <img src={"/"+u.img} alt="" class="card-img-top" />
                            <div class="card-body">
                                <h5> {u.movie}</h5>
                                <h5> &#8377;{u.price}</h5>
                                <button class="btn btn-danger" disabled={u.isLoading} onClick={() => !u.isLoading ? this.fun(u) : null} ><i class="fa fa-cart-plus" area-hidden="true"></i>
                                    {u.isLoading ? 'ADDING...' : 'ADD'}</button>
                            </div>
                        </div>
                    )
                }


            })

        }

    }
    renderCart() {



        return this.props.cart_items.map((u) => {
            return (
                <div key={u.id} class="container cart responsive">


                    <img class="border border-dark responsive" height={100} width={100} style={{ marginTop: 10 }} src={"/"+u.img} alt="dhoni" />
                    <p class="cart_item_name">{u.movie}
                        <br></br>
                        &#8377;{u.total_items_value}
                    </p>

                    <div class="cart-menu btn-toolbar btn-sm responsive">
                        <div class="btn-group mr-4  ">
                            <button type="button" class="btn btn-danger btn-sm" onClick={() => this.props.dec_item(u)}>
                                {/* <Glyphicon glyph="minus" /> */}
                                <span class="glyphicon glyphicon-minus btn-sm"></span>
                            </button>

                            <button type="button" disabled={true}>{u.count}
                            </button>
                            <button type="button" class="btn btn-danger btn-sm" onClick={() => this.props.inc_item(u)}>
                                {/* <Glyphicon glyph="plus" /> */}
                                <span class="glyphicon glyphicon-plus btn-sm"></span>
                            </button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger btn-sm" onClick={() => this.props.removeItem(u)}>
                                remove
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return null;


    }
    search(e) {
        e.preventDefault();//this is for preventing page reloading 
        var obj = { 'name': document.getElementById('query').value };
        this.props.search_query(obj);
    }
    logout(dispatch) {
        //const {dispatch}=this.props;
        //dispatch(userActions.logout())
        this.props.loggout()

    }
    customUser() {
        console.log(this.props.credentials.isAuthenticated + 'authented')
        if (this.props.credentials.isAuthenticated) {
            return (
                <div><h3>{this.props.credentials.user}</h3>
                    <li onClick={() => { this.logout(this.props.dispatch) }}>   <Link to='/logout'>logout</Link></li>
                </div>)
        } else {
    
            return (
                <div >

                    <li class="nav-item " ><Link to="/login"><p style={{ color: 'white' }}>Sign in</p></Link></li>
                    <li class="nav-item  "><Link to="/register"><p style={{ color: 'white' }}>Sign up</p></Link></li>
                </div>
            )
        }
    }
    automate(e){
        console.log(e.target.value)
        var obj={'name':e.target.value}
        this.props.search_query(obj);

    }

    render() {
        return (
            <div>


                <nav class="navbar navbar-expand-sm bg-danger navbar-dark sticky-top" >

                    <ul class="navbar-nav " >
                        <li class="nav-item active" style={{ marginRight: 30 }} >
                            <a class="nav-link" ><h3>MYSTORE</h3></a>
                        </li>

                    </ul>
                    <form class="form-inline " action="" >

                        <input class="form-control col-sm-8 mr-sm-3 " type="text" placeholder="Search" id="query" onChange={this.automate} />

                        <button class="btn btn-primary" type="submit" onClick={(e) => this.search(e)}>
                            Search</button>

                    </form>

                    <ul class="navbar-nav ml-auto list-unstyled"  >



                        {this.customUser()}





                    </ul>

                </nav>






                <div class="container" responsive fluid >

                    <div class="row">


                        <div class="mainbody col-sm-6 col-md-8 col-lg-8" >
                            <div class="jumbotron" style={{}}>

                                <p display="inline-block">{this.renderUser()}</p>
                            </div>
                        </div>

                        <div class="rightside col-sm-6 col-md-4 col-lg-4">

                            <div class="jumbotron">

                                <button type="button" class="btn btn-dark">CART</button>
                                <p >{this.renderCart()}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}


function mapStatetoProps(store) {
    return ({
        movie_users: store.movies,
        cart_items: store.cart,
        my_search_results: store.result,
        credentials: store.credit,
        dispatch: store.dispatch

    })
}

function mapPropsToActionAndDespatchThem(dispatch) {
    return bindActionCreators({
        addToCart: AddToCart,
        removeItem: removeFromCart,
        inc_item: inc_item_in_cart,
        dec_item: dec_item_in_cart,
        search_query: userSearch,
        changeState: ChangeState,
        changeStateT: ChangeStateT,
        loggout: userActions.logout



    }, dispatch)
}
export default connect(mapStatetoProps, mapPropsToActionAndDespatchThem)(ProductContainer);