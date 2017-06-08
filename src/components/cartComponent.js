//the container
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CartActions from '../actions/cartActions'
import Shelf from './shelfComponent'

class Cart extends Component {
    render() {
        const CartItems = this.props.cart.map((item, id) => 
        <li key={id}>{item}</li>)

        return (
            <div className='Cart'>
                <Shelf addItem={this.props.action.addToCart} />
                <h3>Shopping Bag</h3>
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
        action: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
