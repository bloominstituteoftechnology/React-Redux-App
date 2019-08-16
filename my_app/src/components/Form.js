import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/articleActions';

const Form = (props) => {

    let today = new Date().toISOString();
    // today.splice(0, 10);
    console.log('today', today);

    const selectors = {country: '', topic: ''};

    const handleChange = e => {
        e.preventDefault();
    }

    return (
        <>
        <h1>click here to generate today's big headlines</h1>
        <button onClick={props.getData}>Submit</button>
        </>
    )
}

const mapStateToProps = state => {
    console.log('formstate', state);
    return {
        country: state.country,
        topic: state.topic,
        mentioning: state.mentioning,
        date: state.date,
        publishers: state.publishers,
        url: state.fetchUrl
    }
}

export default connect(
    mapStateToProps, 
    { getData }
)(Form);