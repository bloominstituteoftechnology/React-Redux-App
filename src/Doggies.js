import React from 'react';
import { connect } from 'react-redux';
import { getDoggies } from './actions/actions';
import Loader from 'react-loader-spinner';
import "./doggies.css"

const Doggies = (props) => {
    console.log(props)
    return ( 
        <div>
            <button className="button" onClick={props.getDoggies}>
                {props.loading ? (
                    <Loader type="Puff" color="crimson" height={50} width={50} />
                    ) : (
                        <h2>Click me!!</h2>
                    )}
            </button>
            <div className="pups">
            {props.dogs &&
            props.dogs.map(pup => (
                <img src={pup} alt='Doggy' />
                ))}
                </div>
        </div>
     );
}
 
const mapStateToProps = state => {
    return {
        dogs: state.dogs,
        loading: state.loading
    };
};
export default connect(
    mapStateToProps,   
    { getDoggies }
)(Doggies);