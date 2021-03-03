import './App.css';
import {useEffect} from 'react'
import axios from 'axios'


function App() {
  useEffect (()=>{
    axios
    .get('https://ghibliapi.herokuapp.com/films')
    .then( res => console.log(res))
    .catch(err => console.log(err))
    },[])
  return (
    <div className="App">
      <h1> API CALLS</h1>

    </div>

  );
}

export default App;
