import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class UserList extends Component {
    render() {
        const usersList = this.props.users.map((user) => 
        <li key={user.id}>{user.first}</li>)

        return (
            <ul>
                {usersList}
            </ul>
        )
    }
}

//takes a piece of state and sends it to the component as props
function mapStateToProps(state) {
    // console.log(state.users)
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList)