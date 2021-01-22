import {getDogData} from "./actions/actions"
import './App.css';
import {connect } from 'react-redux'
import React,{ useEffect } from "react"
function App(props) {

   const DogImages = (props) =>{
    useEffect(() => {
      
  
  },[])
   }

  return (
    <div className="App">
       <h2>HERE IS SOME RANDOM IMAGES OF DOGS JUST BECAUSE...</h2>
           <button onClick={props.getDogData}>getDogData</button>
       {/* {props.isLoading ? <p>Loading Poochie Pies...</p> : null } */}
       {/* {props.error? <p style={{color: "red"}}>{props.error}</p> : null } */}
       
          { this.props.dogData.map(dogImage => {
                  return(
            <div>
            <img src={dogImage} key={dogImage.id} alt="images of dogs"/>
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
