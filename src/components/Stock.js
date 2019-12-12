import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/Actions';
import styled from 'styled-components';

const StockContainer = styled.div`
    header {
        height: 7.5vh;
        width: 1024px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        h1 {
            margin-right: 16px;
            color: whitesmoke;
            font-weight: 700;
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
    }
`

const Stock = props => {
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
        <StockContainer>
            <header>
                <h1>guacMarket</h1>
                <form onSubmit={onSubmit} autoComplete='off' spellCheck='false'>
                    <input type='text' placeholder='Ticker' value={input} onChange={onChange}/>
                    <button type='submit'><i className="fas fa-search"></i></button>
                </form>
            </header>
        </StockContainer>
    );
};

export default connect(null, {getData})(Stock);