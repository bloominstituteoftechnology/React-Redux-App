import React, {useEffect, useState} from 'react';
import {getBreed, getDogPic} from '../action/action'
import {connect} from 'react-redux';




const Breeds = (props) => {
console.log('here is the object keys', props.dogBreed)
    useEffect(() => {
        props.getBreed()
    }, [])

const [dogBreed, setDogBreed] = useState('')

const handleChange = (e) => {
    setDogBreed(e.target.value) 
    console.log('hello', e.target.value)
}

    return(
        
        <div>
            <div>Dog pics</div>
        <div>
            
            <label >Choose a breed </label>
       
          <select value={dogBreed} onChange={handleChange} id='dogs'>
              {Object.keys(props.dogBreed).map(breed => {
                  return <option key={breed} value={breed}>{breed}</option>
              })}
        
          </select>
        </div> 
        <button onClick={()=> props.getDogPic(dogBreed)}>
        Submit
        </button>  
    
        <div>
            {props.dogPic? 
            <img src={props.dogPic} >
            </img>:
            <img src='https://images.dog.ceo/breeds/cattledog-australian/IMG_4386.jpg'/>}
        </div>
      
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        dogBreed: state.dogBreed,
        isFectching: state.isFectching,
        fetchingError: state.fetchingError,
        dogPic: state.dogPic
    }
}

export default connect(mapStateToProps, {getBreed, getDogPic})(Breeds)