import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImage, getQuote } from '../actions/index';

const Taylor = (props) => {

    useEffect(() => {
        props.getImage();
        props.getQuote();
    },[props.getImage, props.getQuote]);

    return(
        <>
            <img src={props.image} alt='Taylor pic'/>
            <p>{props.quote}</p>
            <button onClick={() => {
                props.getImage();
                props.getQuote();
            }}>Randomize!</button>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        image: state.image,
        quote: state.quote,
        loadingImage: state.loadingImage,
        loadingQuote: state.loadingImage,
        errorImage: state.errorQuote,
        errorQuote: state.errorQuote
    }
}

const mapDispatchToProps = { getImage, getQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Taylor);