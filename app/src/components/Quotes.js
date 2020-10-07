import React, { useEffect } from 'react';
import {connect} from 'react-redux';
// import Loader from 'react-loader-spinner';
import {fetchQuote} from '../store/actions/quoteActions';

const Quotes = props => {
    useEffect(() => {
        props.fetchQuote()
    }, []);

    return (
        <main>
            <h1>Chuck Norris, The Facts:</h1>
            {/* {props.isFetching && (
            <Loader type='Puff' color="00BFFF" height={100} width={100} timeout={3000}/>
            )} */}
            {props.quote && <h3>"{props.quote}"</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchQuote}>more facts</button>
        </main>
    )
};
const mapStateToProps = state => {
    console.log(state)
    return {
        quote: state.quotesReducer.quote,
        isFetching: state.quotesReducer.isFetching,
        error: state.quotesReducer.error,
    }
}
export default connect(mapStateToProps, {fetchQuote})(Quotes);

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       default:
//         return state;
//     }
//   };

