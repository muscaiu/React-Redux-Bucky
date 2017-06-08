import {createStore } from 'redux'

import rootReducer from './reducers/indexReducer'

export default (initialState) => {
    return createStore(rootReducer, initialState)
}