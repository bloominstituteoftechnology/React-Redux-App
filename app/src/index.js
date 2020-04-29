import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'; // imported Provider to make the store available to the app components wrapped in the connect function

// imported to create a store object for holding state data
// imported applyMiddlware to be an argument in the createStore and takes thunk as an argument to allow for async actions
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk'; // imported thunk to allow foe async action creators
import reducer from './reducers/reducer'; // imported reducer to be the argument passed into createStore

// create a redux store using the createStore function
const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}> {/* Pass store to Provider as props so components can access it */}
    <App />
    </Provider>,
rootElement
);
