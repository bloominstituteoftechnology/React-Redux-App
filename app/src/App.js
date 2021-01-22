import {getDogData} from "./actions/actions"
import './App.css';
import {connect } from 'react-redux'
import React,{ useEffect } from "react"
function App(props) {

  //  const DogImages = (props) =>{
  //   useEffect(() => {
      
  
  // },[])
  //  }

  return (
    <div className="App">
       <h2>HERE IS SOME RANDOM IMAGES OF DOGS JUST BECAUSE THEY ARE SO STINKIN CUTE!
            <img className="dog-emoji" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/272/dog-face_1f436.png"/>
       </h2>
            <button className="btn" onClick={props.getDogData}>Press to get dog Images</button> 
        {props.isLoading ? <p>Loading Poochie Pies...</p> : null }
        {props.error? <p style={{color: "red"}}>{props.error}</p> : null } 
       
          { props.dogData.map(index => {
                  return(
            <div className="image-container">
            <img src={index}   alt="images of dogs"/>
            </div>

                  )



           })} 
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    isloading: state.isloading,
    error: state.error,
    dogData: state.dogData


  }
  
}

export default connect(mapStateToProps,{getDogData})(App)
