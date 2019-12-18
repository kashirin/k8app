import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import CombinedReducers from './combine-reducers';


import App from './App.js';
import RedButton from "./components/RedButton";

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(CombinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(<Provider store={store}>
<App>
    <RedButton/>
</App>
</Provider>, document.querySelector("#root"));
