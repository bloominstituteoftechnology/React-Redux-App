import React from 'react';
import {connect} from 'react-redux';
import {getPicture} from '../actions/index';
function FoodPhoto(props){
   
    if(props.error){
        return <h2>Error finding image...</h2>
    }
    if(props.isFetching){
        return <h2>Fetching image for you...</h2>
    }
    
  const handleClick = () => {
      props.getPicture()
  }
  
    return (
        <div>
            <img src={props.picture} alt='test'/>
            <button onClick={handleClick}>New Picture</button>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        picture: state.picture,
        isFetching:state.isFetching,
        error:state.error
    }
}
export default connect(mapStateToProps,{getPicture})(FoodPhoto)