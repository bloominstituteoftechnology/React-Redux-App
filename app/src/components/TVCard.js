import React from 'react';
import { connect } from 'react-redux'; // imported connect so this app can be linked to the redux store
import { getTVShow } from '../actions/actions';

// import these styled elements for use in styling the tv shows card
import {
  Card,
  Title,
  PosterContainer,
  Poster,
  Details,
  List,
  Item,
  Value,
  Button
} from "./CardStyles";

const TVCard = props => {
  const fetchShow = event => { // function calls the getTVShow action creator to fetch data from the API
    event.preventDefault();
    props.getTVShow();
  };

  return ( // returns the DOM elements for rendering
    <Card>
      <Title>{props.title}</Title>
        <PosterContainer>
            <Poster src={props.poster} alt={props.title}/>
        </PosterContainer>
        <Details>
            <List>
                <Item>Initial Air Date: <Value>{props.firstAir}</Value></Item>
                <Item>Numer of Seasons:  <Value>{props.seasons}</Value></Item>
                <Item>Number of Episodes:  <Value>{props.episodes}</Value></Item>
                <Item>Last Air Date:  <Value>{props.lastAir}</Value></Item>
            </List>
        </Details>
        <Button class='button' onClick={fetchShow}>Get Show</Button>
    </Card>
  )  
};

// mapStateProps allows us to take the state data and make it where we can retrieve data for this component via props
const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    title: state.title,
    poster: state.poster,
    seasons: state.seasons,
    episodes: state.episodes,
    firstAir: state.firstAir,
    lastAir: state.lastAir,
    error: state.error
  }
}

// connect links this component to the redux store so it can retrieve state data it needs access to
export default connect(mapStateToProps,{ getTVShow })(TVCard);
