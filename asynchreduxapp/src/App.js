import React from 'react';
import './App.css';
import BeerButton from './components/BeerButton';
import { createStore, applyMiddleware } from 'redux';
import { beerReducer as reducer} from './reducers/beerReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BG from "../src/images/fabio-alves-_fLgxjACz5k-unsplash.jpg"
import BeerCard from './components/BeerCard';
import styled from 'styled-components';


const store = createStore(reducer, applyMiddleware(thunk));
const BGround = styled.div`
  background-image: url(${BG});
  background-size: cover;
  `;

export default function App() {
  return (
    <Provider store={store}>
      <BGround>
      <div className="App">
        <h1 className='h1'>BEER List</h1>
        <BeerButton />
        {/* <BeerList /> */}
        <div className='beercards'>
        <BeerCard />
        </div>
      </div>
      </BGround>
    </Provider>
  );
}

