import React, { Component } from 'react';

class Shelf extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shelfItems: [
                'shampoo',
                'chocolate',
                'yogurt'
            ]
        }

        this.onClickAdd = this.onClickAdd.bind(this)
    }

    onClickAdd(item) {
        this.props.addItem(item)
    }

    render() {
        const shelfItems = this.state.shelfItems.map((item, id) =>
            <li key={id}>
                <button onClick={() => this.onClickAdd(item)}>[+]</button>
                {item}
            </li>)

        return (
            <div>
                <h3>Shelf</h3>
                <ul>{shelfItems}</ul>
            </div>
        );
    }
}

export default Shelf;
