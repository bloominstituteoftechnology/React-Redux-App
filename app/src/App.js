import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
import {connect} from 'react-redux' 
import {getFilms} from './actions/getFilms'
import FilmList from './components/FilmList'

// function 

const App =(props)=> {
  console.log(props.state)
  useEffect(()=>{
      props.api()
  }, [])
  return (
    <div className="App">
      <h1> API CALLS</h1>

    </div>

  );
}

function mapStateToProps(state){
  return {
    state,
  }
}

function mapDispatchToProps() {
  return{
    // has to be made into a key value to call in the useeffect
    api: getFilms
  }
}



// this connects the state and the action dispatch to the props in the App. a circular connection
export default connect(mapStateToProps, mapDispatchToProps)(App);
