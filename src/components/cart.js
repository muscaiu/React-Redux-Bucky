//the container
import React, { Component } from 'react';
import { bindActionCreator } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/add_to_cart'
import Shelf from './shelf'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const CartItems = this.props.cart.map((item, id) => 
        <li key={id}>{item}</li>)

        return (
            <div className='Cart'>
                <Shelf addItem={this.props.action.addToCart} />
                <h2>Shopping Bag</h2>
                <ol>
                {CartItems}
                </ol>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreator(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
