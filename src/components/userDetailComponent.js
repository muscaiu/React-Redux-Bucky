import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return(<h2>Select a user</h2>)
        }
        return (
            <div>
                <img alt="dickface" src={this.props.user.thumbnail} />
                <div>{this.props.user.first} {this.props.user.last}</div>
                <div>Age: {this.props.user.age}</div>
                <div>Description:{this.props.user.description}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)