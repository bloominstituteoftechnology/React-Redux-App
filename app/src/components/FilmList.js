import React from 'react'
import {connect} from 'react-redux'
import {FilmCard} from './FilmCard'


export const FilmList = ({props}) => {
    console.log(props.films)
    return (
        <div>
            {props.films.map(item => {
                <FilmCard key={item.id} film={item}/>
            } )}
            
        </div>
    );
    
    
};

export default connect((state) => state.films(FilmList))