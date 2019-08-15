import React from 'react';
import { connect } from 'react-redux';

const Articles = (props) => {

    console.log('props', props);

    return (
        <>
            <p>{props.content.title}</p>
        </>
    )
}

const mapStateToProps = state => {
    console.log('state', state);

    return {

    }
}

export default connect(mapStateToProps,{})(Articles);