import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
