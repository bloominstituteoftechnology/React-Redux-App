import React from 'react';
import { connect } from 'react-redux';
import { getHouse } from '../Actions/actions';

const HpHouse = props => {
    const fetchHouse = e => {
        e.preventDefault();
        props.getHouse();
    };

    return(
        <>
            <h1>Welcome to Hogwarts</h1>
            {props.isFetching && <p>Sorting your House, Sit Tight Wizards!</p>}
            <div>
                {props.house.map(house => (
                    <h2 key={house.url}>{house}</h2>
                ))}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick = {fetchHouse}>Sort Me Into My House!</button>
        </>
    );
};

const mapStateToProps = state => ({
    house: state.house,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getHouse }
)(HpHouse);