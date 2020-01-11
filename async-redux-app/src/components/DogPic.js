import React from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions/actions';
import './DogPic.css';

const DogPic = props => {
    return (
        <div className="dog-picture">
            {props.loading ? (
                <h1>Loading</h1>
            ) : (
                <img className="dog-image" src={props.dog} alt="dog" />
            )}
            <button className="new-dog-button" onClick={() => {props.getDog()}}>Get Dog</button>
        </div>
    );
}

const mapStateToProps = state => {
    return { loading: state.loading, dog: state.dog };
}

export default connect(mapStateToProps, { getDog })(DogPic);