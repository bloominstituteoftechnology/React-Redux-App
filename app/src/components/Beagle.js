import React from 'react';
import { connect } from 'react-redux';
import { getBeagle } from '../actions';

const Beagle = props => {
    return ( <
        >
        <
        h2 > Cutest Puppy ever! < /h2> <
        button onClick = { props.getBeagle } > Fetch Beagle! < /button> <
        div >
        <
        img src = { props.beagles }
        /> < /
        div > <
        />
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        beagles: state.beagles
    };
};

export default connect(
    mapStateToProps, { getBeagle }
)(Beagle);