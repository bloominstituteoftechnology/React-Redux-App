import React, {useState}from 'react';
import{connect} from 'react-redux'
import './App.css';

function App()

{const [search,setSearch] = useState('')

const handleChange= e =>{
  return(
    setSearch({
      [e.target.name]: e.target.value 
    })  
  )
}

const submitSearch = (e) => {
  e.preventDefault()
  props.getPics()

}
  return (
    <>
      <h1>Find a comic</h1>
      <label >
        <input name='search' onChange={ handleChange}>
        </input>
      </label>
      <button onClick={submitSearch}>
        submit
      </button>

    </>
  );
}

const mapStateToProps = state => {
  pics = state.pics
  err = state.err
}

export default connect(
  mapStateToProps,
  {getPics})(App);
