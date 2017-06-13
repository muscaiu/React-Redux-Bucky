import { createStore } from 'redux'
import rootReducer from './reducers/indexReducer'
import { loadState } from './localStorage'



export default (initialState) => {
    const persistedState = loadState()
    
    return createStore(rootReducer, persistedState, initialState)
}