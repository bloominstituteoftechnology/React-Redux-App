import React from 'react';
import { connect } from 'react-redux';
import { fetchAnime } from '../actions/index';

function AnimeList(props) {
  console.log('AnimeList', props);
  return (
    <div>
      <button onClick={() => props.fetchAnime()}>Get Anime</button>
      {props.isFetching && <div>Loading...</div>}
      <ul>
        {props.articles.map(anime => (
          <li key={anime.title}>
            {anime.title}
            {anime.intro}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapDispatchToProps = {
  fetchAnime
};

export default connect(
  state => state,
  mapDispatchToProps
)(AnimeList);