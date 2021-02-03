import React from 'react';
import { connect } from 'react-redux';

import Film from './Film';

const FilmList = props => {
    return (
        <div className="filmsList">
            {props.films.map(film => (
                <Film key={film.key} title={film.title} description={film.description}  />
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        films: state.films
    };
};

export default connect(mapStateToProps, {})(FilmList);