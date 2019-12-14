import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/Actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    header {
        height: 7.5vh;
        width: 1024px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
        }

        a h1 {
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
                border-top-left-radius: 3px;
                border-bottom-left-radius: 3px;
                outline: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 14px;
                font-weight: 500;
                color: black;
            }
    
            button {
                height: 32px;
                width: 43.22px;
                background: whitesmoke;
                border: none;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                outline: none;
                color: gray;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                
                .fa-search {
                    font-size: 16px;
                }

                .loader {
                    height: 16px;
                    width: 16px;
                    border: 3px solid gray;
                    border-top: 3px solid rgba(0, 0, 0, 0);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
`

const Header = props => {
    const [input, setInput] = useState('');

    const onChange = event => {
        setInput(event.target.value.toUpperCase());
    };

    const onSubmit = event => {
        event.preventDefault();
        props.getData(input);
        setInput('');
        props.history.push('/search');
    };

    return (
        <HeaderContainer>
            <header>
                <Link to='/'><h1>guacMarket</h1></Link>
                <form onSubmit={onSubmit} autoComplete='off' spellCheck='false'>
                    <input type='text' placeholder='Ticker Symbol' value={input} onChange={onChange}/>
                    <button type='submit'>{props.fetching ? <div className='loader'></div> : <i className="fas fa-search"></i>}</button>
                </form>
            </header>
        </HeaderContainer>
    );
};

const mapStateToProps = state => {
    return {
        fetching: state.fetching
    };
};

export default connect(mapStateToProps, {getData})(Header);