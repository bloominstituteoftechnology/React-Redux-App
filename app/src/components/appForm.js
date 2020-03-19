import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';


 const AppForm = props => {
    const handleGetData = event =>{
        props.getData()
    };

    return(
        
        <button onClick ={handleGetData}>Add a lime to your Corona</button>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    };
}


export default connect(mapStateToProps,{getData})(AppForm);