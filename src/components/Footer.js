import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    height: 5vh;
    background: whitesmoke;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        padding: 0 16px;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2019 guacMarket</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </FooterContainer>
    );
};

export default Footer;