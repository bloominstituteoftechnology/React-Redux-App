import React from 'react'
import {connect} from 'react-redux';
import {getData} from '../actions/actionIndex';




const Houses = (props) => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    return (
        <div className='houses-button-div'>
              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<button onClick={handleGetData}>Show Houses of Ice and Fire</button>)}  
              
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps,{getData})(Houses) 