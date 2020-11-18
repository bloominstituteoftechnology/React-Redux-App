import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import DrinkList from './components/DrinkList';
import SearchForm from './components/SearchForm';
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App () {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Cocktails and Dreams</h1>
      <SearchForm />
      <DrinkList />
    </div>
    </Provider>
  )
}
