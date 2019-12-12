import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/Actions';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
    height: 95vh;
    width: 1024px;
    margin: 0 auto;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 48px;
    }

    h2 {
        margin-bottom: 16px;   
        font-weight: 600;
    }

    form {
        display: flex;

        input {
            height: 32px;
            width: 284px;
            padding: 8px 16px;
            background: white;
            border: none;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-weight: 500;
            color: black;
        }

        button {
            height: 32px;
            width: 43.22px;
            background: whitesmoke;
            border: none;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            outline: none;
            color: gray;
            cursor: pointer;
        }
    }
`

const LandingPage = props => {
    const [input, setInput] = useState('');

    const onChange = event => {
        setInput(event.target.value.toUpperCase());
    };

    const onSubmit = event => {
        event.preventDefault();
        props.getData(input);
        setInput('');
    };

    return (
        <LandingPageContainer>
            <h1>guacMarket</h1>
            <h2>The #1 stock market research application</h2>
            <form onSubmit={onSubmit} autoComplete='off' spellCheck='false'>
                <input type='text' placeholder='Ticker' value={input} onChange={onChange}/>
                <button type='submit'><i className="fas fa-search"></i></button>
            </form>
        </LandingPageContainer>
    );
};

export default connect(null, {getData})(LandingPage);