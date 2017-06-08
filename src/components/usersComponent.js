import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import * as userActions from '../actions/userActions'
import { selectUser } from '../actions/userActions'

class UserList extends Component {
    render() {
        const usersList = this.props.users.map((user) =>
            <li
                key={user.id}
                onClick={() => this.props.selectUser(user)}
            >
                {user.first}
            </li>)

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
//in order to use it we need to pass it as a prop and hook it to use it with redux
//dispatch is a fancy way of saying call a function
function mapDispatchToProps(dispatch) {
    // return bindActionCreators({selectUser: userActions.selectUser()}, dispatch)
    return bindActionCreators({ selectUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)