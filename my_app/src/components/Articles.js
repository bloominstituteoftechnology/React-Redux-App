import React from 'react';
import { connect } from 'react-redux';

const Articles = (props) => {

    console.log('props', props);

    return (
        <>
            <a href={props.url}><p>{props.content.title}</p></a>
            {/* <p>{props.source.name}</p> */}
            <p>{props.author}</p>
            <img src={props.urlToImage} />
        </>
    )
}

const mapStateToProps = state => {
    console.log('state', state);

    return {

    }
}

export default connect(mapStateToProps,{})(Articles);