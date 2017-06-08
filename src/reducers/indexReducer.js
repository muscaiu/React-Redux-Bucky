import {combineReducers} from 'redux'

import cart from './cartReducer'
import users from './userReducer'

const allReducers = combineReducers({
    cart,
    users
})

export default allReducers