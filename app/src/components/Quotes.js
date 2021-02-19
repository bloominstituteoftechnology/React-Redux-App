import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

const Quotes = (props) => {
  //const { quote, isFetching, error, fetchQuoteLoading } = props;

  const handleClick = ()=> {
    
    console.log('click');
    props.getQuote();
  }

  useEffect(() => {
    props.getQuote();
  }, []);

  if (props.error) {
    return <h2>We got an error: {props.error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching another quote for ya!</h2>;
  }

  return (
    <>
      <h3> 🍊 Man says: </h3> <br/>
      <h2> {props.quote} </h2>
      <br/>
      <button onClick={handleClick}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quotes);