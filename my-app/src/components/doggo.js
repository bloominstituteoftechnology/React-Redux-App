import React from 'react';

import { fetchDog } from '../actions';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import '../App.css';

const Doggo = props => {
    console.log(props);

    return (
        <div className='doggo'>
            <img className='photo' src={props.dogImage.message} alt='doggo' />

            {!props.dogImage && !props.isLoading && (<p>Fetching good dogs...</p>)}

            {props.isLoading && (<Loader type="Circles" color="#00BFFF" height={80} width={80}/>)}

            {props.dogImage && !props.isLoading && <p>{props.dogImage.activity}</p>}

            <button onClick={props.fetchDog}>Fetch some dogs</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { isLoading: state.isLoading, dogImage: state.dogImage, error: state.error }
}

export default connect(mapStateToProps, { fetchDog })(Doggo);