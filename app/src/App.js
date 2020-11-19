import './App.css';
import AnimeList from './components/AnimeList'
import SearchForm from './components/SearchForm'
import animeReducer from './reducer/index'
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
const store = createStore(animeReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Ghibli-pi</h1>
      <SearchForm />
      <AnimeList />

    </div>
    </Provider>
  );
}

export default App;
