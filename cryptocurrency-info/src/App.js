import React, {useState} from 'react';
import { connect, useDispatch } from "react-redux";
import getCoin from "./actions/actions";
import CryptocurrencyInfo from "./components/CryptocurrencyInfo";
import './App.css';

const mapStateToProps = (state) => {
  return state
  console.log(state)
}

const mapDispatchToProps = {getCoin}



function App(state) {
  const [coin, setCoin] = useState("bitcoin");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCoin(coin))
  }

  return (
    <div className="App">
      <div className="app__heading__text">
      <h1>Cryptocurrency Info</h1>
      <h3>This tool allows you to look up information on any cryptocurrency by just typing in the desired name.</h3>
      </div>
      <div className="app__heading__input__box">
        <form>
          <input required placeholder="bitcoin" onChange={(e) => setCoin(e.target.value.toLowerCase())}/>
          <button type="submit" onClick={handleSubmit}>Search</button>
          
        </form>
      </div>
      <CryptocurrencyInfo coinInfo={state}/>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);