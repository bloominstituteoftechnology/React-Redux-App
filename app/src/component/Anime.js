import React from 'react';
import {connect} from 'react-redux';

const Anime = ({anime, isLoading, error}) => {
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {anime && anime.map((a, i) => <p key={i}>{a.anime}</p>)}
            {error && <p>Uh oh, error</p>}
        </div>
    )
}

const mapPropsToState = state => {
    return {
        isLoading: state.isLoading,
        anime: state.anime,
        error: state.error
    }

}

export default connect(mapPropsToState)(Anime);