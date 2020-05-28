import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from "../Actions/actions"
import { useDispatch } from "react-redux";
import Character from './HpCard'


const Characters = props =>{

    const dispatch= useDispatch();
        const fetchCharacters = e =>{
            e.preventDefault();
            dispatch(getCharacters())
        }
        console.log(props.character)

        return (
            <div>
                <h1 className="heading_name">Harry Potter Characters</h1>
                <Character character={props.character} />
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
