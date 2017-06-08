import {combineReducers} from 'redux'

import cart from './cartReducer'
import user from './userReducer'

const allReducers = combineReducers({
    cart,
    user
})

export default allReducers