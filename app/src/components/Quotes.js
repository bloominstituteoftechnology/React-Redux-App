import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';
import styled from 'styled-components';

const Container = styled.div`
    width: 80%;
    h1{
        color: #17252A;
        font-size: 4rem;
    }
    .quoteText{
        font-size: 2.6rem;
    }
    h4{
        font-size: 2rem; 
    }
    button{
        background-color: #2B7A78;
        margin-top: 1.5%;
        padding: 1%;
        border: none;
        color: #17252A;
        font-size: 1.2rem;
        border-radius: 3px;
        color: #DEF2F1;
        font-family: 'Rozha One', serif;
    }
    
`

const Quotes = ({ quote, author, isFetching, error, getQuote }) => {
  useEffect(() => {
    getQuote();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return <h2>Something went wrong: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Your quote is being prepared!</h2>;
  }

  const handleClick = ()=> {
    getQuote();
  }

  return (
    <Container>
        <div className="quote">
            <h1>Quote of the Day</h1>
            <hr></hr>
            <div className="quoteText">
                <h3>" {quote} "</h3>
                <h4>- {author}</h4>
            </div>
            <hr></hr>
        </div>
        <button onClick={handleClick}>Get More Inspiration</button>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    author: state.author,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getQuote})(Quotes);