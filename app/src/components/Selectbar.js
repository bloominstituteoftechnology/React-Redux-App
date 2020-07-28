import React from 'react';

import { connect } from 'react-redux';

const Selectbar = props => {

    return (
        <select>
            <option disabled selected>
                select breed
            </option>
            {props.dogs.map(dog => {
                return <option key={dog.name}>
                    {props.dogs.message}
                </option>
            })}
        </select>
    )
};

const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}

export default connect(
    mapStateToProps,
    {}
)(Selectbar);