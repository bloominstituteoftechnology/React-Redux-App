import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Characters from './components/Characters';



function App(props) {
useEffect(()=> {
  axios.get("https://rickandmortyapi.com/api/character")
    .then(res => {
      console.log(res.data)
      props.dispatch({type: 'SET_STATE', payload: res.data.results})
    })
}, [])
  return (
    <div className="App">
      {props.loadingCharacters ? 'loading...': <Characters characters={props.characters}/>}
    </div>
  );
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);
