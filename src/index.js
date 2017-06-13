import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './components/appComponent';
import allReducers from './store'
import './index.css';


import { saveState } from './localStorage'

const store = allReducers()

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'
    ));

