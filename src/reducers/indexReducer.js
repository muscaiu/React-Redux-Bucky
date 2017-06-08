import {combineReducers} from 'redux'

import cart from './cartReducer'

const allReducers = combineReducers({
    cart
})

export default allReducers