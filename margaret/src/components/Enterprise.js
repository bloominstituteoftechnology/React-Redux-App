// main page 

import React from 'react';
import {starTraction} from '../action/starTraction';
import {connect} from 'react-redux';


const Enterprise = props => {
    return (
 <div className="App">
      <header className="App-header">
        <img src="https://media.giphy.com/media/R0TrhAtNeUC0E/giphy.gif"  alt="Star Trek's Riker smiles directly at you. Piercing the veil between screen and soul, he slowly smiles while on board the USS Enterprise." className="gif-card" />
        <p >
          Just in time to hit the choose button. 
        </p>
        <button onClick={props.starTraction}>Choose</button>
       <p>What should we do?</p>
       <p> api</p>
      </header>
    </div> 
    );

    
}
const mapStateToProps = state => {
  return {
    starTrek: state.starTrek, 
    isLoading: state.isLoading
  };
};
export default connect(mapStateToProps,{starTraction})(Enterprise);