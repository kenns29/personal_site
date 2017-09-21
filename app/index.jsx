import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

/* the combined reducers */
import allReducers from './reducers/index.jsx';

/* the root element */
import App from './components/App.jsx';

/* creates the store */
const logger =   createLogger({
    level: 'warn',
    collapsed: true
    /*Comment this line out if performance becomes too slow
    ,stateTransformer: state => state.toJS()*/
});

const initialState = {};
const store = applyMiddleware(thunk, logger)(createStore)(allReducers, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);