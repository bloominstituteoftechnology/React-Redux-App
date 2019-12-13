import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
    height: 87.5vh;
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
        font-size: 32px;
        font-weight: 500;
    }
`

const Landing = () => {
    return (
        <LandingContainer>
            <h1>The #1 stock market research application</h1>
            <h2>Financial research made easier</h2>
        </LandingContainer>
    );
};

export default Landing;