import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import './index.module.scss';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducers from "./store/reducers/rootReducers";
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;


const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));


reportWebVitals();
