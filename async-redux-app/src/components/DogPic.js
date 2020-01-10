import React from 'react';
import { connect } from 'react-redux';
import { getDog } from '../actions/actions';
import './DogPic.css';

const DogPic = props => {
    console.log("PROPS: ",props);
    return (
        <div className="dog-picture">
            {props.loading ? (
                <h1>Loading</h1>
            ) : (
                <img style={{ maxWidth: "300px"}} src={props.dog} alt="dog" />
            )}
            <button className="new-dog-button" onClick={() => {props.getDog()}}>Get Dog</button>
        </div>
    );
}

const mapStateToProps = state => {
    console.log("state.dog = ",state.dog);
    return { loading: state.loading, dog: state.dog };
}

export default connect(mapStateToProps, { getDog })(DogPic);