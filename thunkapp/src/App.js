import React, {useState}from 'react';
import{connect} from 'react-redux'
import './App.css';
import {getPics} from './actions'
import Comics from './Comics'

const App=(props)=> {
console.log(props)
// const [search,setSearch] = useState('')

// const handleChange= e =>{
//   return(
//     setSearch({
//       [e.target.name]: e.target.value 
//     })  
//   )
// }

const submitSearch = (e) => {
  e.preventDefault()
  props.getPics()

}
  return (
    <>
    <div>
      <h1>Find a cute dog</h1>
      <button onClick={submitSearch}>
        submit
      </button>
    </div>      
      {/* <label >
        <input name='search' onChange={ handleChange}>
        </input>
      </label> */}

      <Comics/>
    </>
  );
}

const mapStateToProps = state => ({
  pics: state.pics,
  err: state.err
})

export default connect(
  mapStateToProps,
  {getPics}
  )(App);
