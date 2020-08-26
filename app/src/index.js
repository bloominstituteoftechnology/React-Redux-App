import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoxCon from './container/boxContainer'
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import mainReducer  from './reducers/index'

let store = createStore(mainReducer, applyMiddleware(thunk))

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Here</p>
        <BoxCon />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}><App /></Provider>
    ,
  document.getElementById('root')
);

