import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { fetchDog } from '../actions';
import DogCard from './DogCard';

import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import '../App.css';

const StyledForm = styled.form`
input {
    margin: 0 .5rem 0 .5rem;
}
`

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledCards = styled.div`
  margin: 2%;
  padding: 1%;
  img{
    height: 15rem;
  }
`

const Doggo = props => {
    console.log(props);

    const [input, setInput] = useState('');

    useEffect(() => {
        fetchDog();
    }, []);

    const onChange = event => {
        setInput(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();
        props.fetchDog(input);
    }

    if (props.error) {
        return (
            <div className='doggo'>
                <h2>Is that a real dog?</h2>
                <StyledForm onSubmit={onSubmit}>
                    <label htmlFor="search">
                        <input
                            onChange={onChange}
                            placeholder="Which dog?"
                            className="input"
                            id="search"
                            type="text"
                        />
                        <button className="button">Search</button>
                    </label>
                </StyledForm>
            </div>
        )
    }

    if (props.isFetching) {
        return (
            <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        )
    }

    return (
        <div className='doggo'>
            <StyledForm onSubmit={onSubmit}>
                <label htmlFor="search">
                    <input
                        onChange={onChange}
                        placeholder="Which dog?"
                        className="input"
                        id="search"
                        type="text"
                    />
                    <button className="button">Search</button>
                </label>
            </StyledForm>
            <StyledList>
                <StyledCards>
                    <DogCard item={props.dogs} />
                </StyledCards>
            </StyledList>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return { isLoading: state.isLoading, dogs: [...state.dogs], error: state.error }
}

export default connect(mapStateToProps, { fetchDog })(Doggo);