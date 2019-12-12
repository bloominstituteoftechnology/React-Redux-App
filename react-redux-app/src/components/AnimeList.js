import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAnime } from '../actions/index';
import AnimeItem from './AnimeItem';

const AnimeNews = props => {
  useEffect(() => {
    props.fetchAnime();
  }, [])

  if (props.isFetching) {
    return <h2>Loading AnimeNews...</h2>
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.articles.map(item => 
        <AnimeItem key={item.id} title={item.title} image={item.image_url} intro={item.intro} />
        )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    isFetching: state.isFetching,
    error: state.error
  }
};

export default connect(mapStateToProps, { fetchAnime })(AnimeNews);