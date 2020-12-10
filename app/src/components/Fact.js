import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getFact } from '../actions/actions'

const Fact = (props) => {
useEffect(() => {
});

    const handleClick = () => {
        getFact();
    }

    return (
        <div>
            <h1>Random Cat Facts</h1>
    <h2>{`Random Fact: ${props.quote}`}</h2>
        <button onClick={handleClick}>Next Fact</button>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        quote: state.quote
    }
}

export default connect(mapStateToProps, { getFact })(Fact);
