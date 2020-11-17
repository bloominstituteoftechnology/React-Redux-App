import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

export default function App () {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Cocktails and Dreams</h1>
    </div>
    </Provider>
  )
}
