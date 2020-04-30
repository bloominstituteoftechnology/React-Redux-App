// Created styles for displaying the movie
import styled from 'styled-components';

// Styling for the Card container
export const Card = styled.div`
    width: 50%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 25% 5px 25%;
    background: blue;
    color: white;
    border: 2px solid black;
    border-radius: 2%;
`;

// Styling for the Title of each TV show
export const Title = styled.h3`
    font-size: 1.6rem;
    color: black;
    margin-top: 15px;
    margin-bottom: 5px;
`;

// Styling for the container of each show's image
export const PosterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
`;

// Styling for each show's image
export const Poster = styled.img`
   width: 450px;
   height: 300px;
   margin: 5px;
   border-radius: 30px
`;

// Styling for the list container that holds list of data of each show 
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
`;

// Styling for the list of each show's info
export const List = styled.ul`
    list-style-type: none;
    margin-right: 15px;
`;

// Styling for each list item of show data
export const Item = styled.li`
    font-size: 1.2rem;
    margin-bottom: 5px;
`;

// Styling for the values of data retrieved from the API
export const Value = styled.span`
    margin-left: 10px;
    font-weight: bold;
`;

// Styling for the button for rendering a new show
export const Button = styled.button`
    width: 200px;
    font-size: 1.5rem;
    color: blue; 
    border: 3px solid black;
    border-radius: 10px;
    background-color: white;
    font-family: 'Poppins', sans-serif;
    margin: 10px 0 30px 30px;
`;