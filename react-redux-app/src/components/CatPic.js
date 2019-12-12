import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import {getCat} from '../actions/catPicAction';

const CatPic = props => {
  console.log('this is cat', props.cat);
  console.log('this is cat file', props.cat.file);

  return (
    <CatWrapper>
      {!props.cat && !props.isFetching && <p>Pssst, wanna see a cat?</p>}
      <CatBtn onClick={props.getCat}>CAT!</CatBtn>
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.cat && <CatImg src={props.cat.file} alt='a random pic of a cat'></CatImg>}
    </CatWrapper>
  )
}

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error,
    id: state.id,
  }
}

export default connect(mapStateToProps, {getCat})(CatPic);

const CatImg = styled.img`
  display: block;
  margin: auto;
  height: 30rem;
  border-radius: 15px;
`

const CatBtn = styled.button`
  width: 10rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 5px;
  background-image: url('https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg');
  background-position: center;
  background-size: cover;
  margin: 2%;
  color: white;
`

const CatWrapper = styled.div`
  background-image: url('https://previews.123rf.com/images/belchonock/belchonock1706/belchonock170600259/79516749-cat-background.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
`