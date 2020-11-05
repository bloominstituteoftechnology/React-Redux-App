import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions'
import styled from 'styled-components';

const Body = styled.div`
    background-color:  #282c34;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.h1`
    font-size: 24px;
    color: whitesmoke;
`;

const Section = styled.div` 
    display: flex;
    flex-direction: column;
    margin: auto auto;
`

const Text = styled.p` 
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
`



const ApiList = (props) => {
    useEffect(() => {
        props.fetchData();
    }, []);


    return (
        <Body>
            <Title>Studio Ghibli Movie Titles</Title>
            {props.isLoading ? <Text>Loading API data....</Text> : null}
            {props.error ? <Text style ={{ color: 'red' }}>{props.error}</Text> : null}
            {props.apiData.map((item) => {
                return(
                <Section>
                    <Text>{item.title}</Text>
                </Section>
            )})}
        </Body>
    );
};


const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        apiData: state.apiData,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData })(ApiList)