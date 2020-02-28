import React from 'react'
import {connect} from 'react-redux';
import {getData} from '../actions/actionIndex';




const Houses = (props) => {
    

    const handleGetDataA = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=1&pageSize=50');
    }

    const handleGetDataB = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=2&pageSize=50');
    }

    const handleGetDataC = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=3&pageSize=50');
    }

    const handleGetDataD = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=4&pageSize=50');
    }

    const handleGetDataE = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=5&pageSize=50');
    }

    const handleGetDataF = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=6&pageSize=50');
    }

    const handleGetDataG = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=7&pageSize=50');
    }

    const handleGetDataH = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=8&pageSize=50');
    }

    const handleGetDataI = (e) => {
        console.log(e)
        e.preventDefault();
        props.getData('houses?page=9&pageSize=50');
    }

    // const handleGetDataJ = (e) => {
    //     console.log(e)
    //     e.preventDefault();
    //     props.getData('houses?page=10&pageSize=1');
    // }


    return (
        <div className='houses-button-div'>

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataA}>pg 1</h2>)}  

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataB}>pg 2</h2>)} 

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataC}>pg 3</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataD}>pg 4</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataE}>pg 5</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataF}>pg 6</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataG}>pg 7</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataH}>pg 8</h2>)}

              {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataI}>pg 9</h2>)}

              {/* {props.isFetchingData ? (<h2>Loading Houses of Ice and Fire</h2>):(<h2 onClick={handleGetDataJ}>pg 10</h2>)} */}

              
              
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps,{getData})(Houses) 