import React, {useState}from 'react';
import{connect} from 'react-redux'
import './App.css';
import {getPics} from './actions'
import Comics from './Comics'
import {Button} from 'reactstrap'

const App=(props)=> {

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
      <h1>Brighten your day!</h1>
      <Button color='primary' onClick={submitSearch}>
        Add smile to face
      </Button>
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
