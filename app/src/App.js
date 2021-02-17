import {getImg} from './actions'
import {connect} from 'react-redux'
import React, {useEffect} from 'react'
import './App.css';

function App(props) {
  const { img, isFetching, error }= props
const handleClick = () => {
  props.getImg()
}

useEffect(( ) => {
  props.getImg()
},[])

if (error) {
  return <h2>YOU BROKE IT</h2>
}

if (isFetching) {
  return<h2>GO FIX SOME REAL FOOD</h2>
}
  return (
    <>
    <div className="App">
      <h1>RANDOM FOOD</h1>
      <div>
      <button onClick={handleClick} >CLICK ME!</button>
      </div>
      <img src={img} alt={'SORRY ...NO FOOD FOR YOU'} />      
    </div>
    </>
  );
}

const mapStateToProps = state => {
  return{
    img: state.img,
    error: state.error,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getImg })(App);
