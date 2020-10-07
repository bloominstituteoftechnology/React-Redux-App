import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from "../Actions/actions"
import { useDispatch } from "react-redux";
import Character from './HpCard'
import styled from 'styled-components';

// const Card = styled.div`
//     color: black;
//     width: 400px;
//     max-height: auto;
//     margin-left: auto;
//     margin-right: auto;
// `;

// const Explanation = styled.p`
//     font-size: 20px;
//     color: #26354B;
//     display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
// `;

const Title = styled.h2`
    font-size: 42px;
    background: -webkit-linear-gradient(left, #0E1A40, #222F5B, #5D5D5D, #946B2D, #000000  );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:black;
`;

const Characters = props =>{

    const dispatch= useDispatch();
        const fetchCharacters = e =>{
            e.preventDefault();
            dispatch(getCharacters())
        }
        console.log(props.character)

        return (
            <div>
                <Title>
                    <h2 className="heading_name">Harry Potter Characters</h2>
                </Title>
                <div>
                    <Character className="character" character={props.character} /> 
                </div>

                <button className="fetch_button" onClick={ fetchCharacters }>Fetch some characters</button>
            </div>
        )
    }

    const mapStateToProps = state =>
        {
        return(
            {
            character: state.character,
            error: state.error
            }
        )
        
    };

export default connect( mapStateToProps, { getCharacters }) (Characters);
