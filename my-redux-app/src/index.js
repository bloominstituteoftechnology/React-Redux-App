import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducer/songs';
// import { reducer as titleReducer } from './reducer/title';
// import { reducer as artistReducer } from './reducer/artist';

import './index.css';
import './styles.css';
import App from './App';


// const rootReducer = combineReducers({
//     title: titleReducer,
//     artist: artistReducer
// });

const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root')
);

