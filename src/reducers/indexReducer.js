import {combineReducers} from 'redux'

import cart from './cartReducer'
import users from './userReducer'
import activeUser from './activeUserReducer'

const allReducers = combineReducers({
    cart,
    users,
    activeUser
})

export default allReducers