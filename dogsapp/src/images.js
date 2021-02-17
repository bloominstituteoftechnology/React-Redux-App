import React from "react";
import {connect} from "react-redux"
import { getImages} from "./actions/actions"

const Images = (props) =>{

    const {images,isFetching,error,getImages} = props;
    console.log(props)

    const onClick =() =>{
        props.getImages()
    }


    if (error){
        return <h3>Houston We have a problem!</h3>
    }

    if (isFetching){
        return <h3>Fetching German Sheperds ! </h3>
    }





return (
    <>
    <div>
        <button onClick={onClick}>
        </button>
     </div>
         {
             props.images.map(image => (
             
            
             <div>
              <img src={image}/>
             </div>
             
         ))
         }
    </>    
)





}
const mapStateToProps = (state) =>{
    return{
        images:state.images,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{getImages})(Images)