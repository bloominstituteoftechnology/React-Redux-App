import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getImage, getQuote } from '../actions/index';

const Taylor = (props) => {

    const getImg = props.getImage;
    const getQ = props.getQuote;
    useEffect(() => {
        getImg();
        getQ();
    },[getImg, getQ]);

    return(
        <>
            <img src={props.image} alt='Taylor pic'/>
            <p className='quotes'>{props.quote}</p>
            <button class='myButton' onClick={() => {
                props.getImage();
                props.getQuote();
            }}>Taylorize!</button>
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