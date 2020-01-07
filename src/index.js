import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import history from './History';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './Redux/Reducers';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

const Store = createStore(Reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(<Router history={history}><Provider store={Store}><App /></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
