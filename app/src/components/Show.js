import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getShow } from '../actions';
import styled from 'styled-components';

import './styles.css'

const Show = props => {
    const { title, episodes, image, score, synopsis, rating, isFetching, error} = props;

    useEffect(() => {
        props.getShow();
    }, []);

    if (error) {
        return <h2>Oops! We got an error: {error}</h2>;
    }
    if (isFetching) {
        return <h2>Fetching the show data for ya!</h2>;
    }

    return (
        <Container>
            <TextContainer>
                <h2>{title}</h2>
            </TextContainer>
            <SideContent>
                <ImageContainer>
                    <Image src={image} alt='Show Banner'/>
                </ImageContainer>
                <RightContent>
                    <UnorderedList>
                        <ListItem>{episodes} Episodes</ListItem>
                        <ListItem>Average User Score: {score}</ListItem>
                        <ListItem>TV Rating: {rating}</ListItem>
                    </UnorderedList>
                    <Para><Bold>Synopsis:</Bold> {synopsis}</Para>
                </RightContent>
            </SideContent>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 50px auto;
    background-color: #30475e;
    color: white;
    border-radius: 20px;
    border: 5px solid #CFCFCF;
    font-family: sans-serif;
`;

const SideContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
`;

const UnorderedList = styled.ul`
    padding-left: 20px;
`;

const RightContent = styled.div`
    box-sizing: border-box;
    padding: 15px;
    height: 260px;
    width: 350px;
    border: 2px solid #CFCFCF;
    border-radius: 10px;
`;

const ListItem = styled.li`
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
    box-sizing: border-box;
    height: 260px;
    border: 2px solid #CFCFCF;
    border-radius: 10px;
`;

const TextContainer = styled.div`
    text-align: center;
    padding-top: 10px;
    font-size: 1.5rem;
`;

const Para = styled.p`
    font-size: 1.1rem;
    padding: 0 0 5px 5px;
`;

const Bold = styled.span`
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
`;




const mapStateToProps = state => {
    return {
        title: state.title,
        episodes: state.episodes,
        image: state.image,
        score: state.score,
        synopsis: state.synopsis,
        rating: state.rating,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { getShow })(Show);