import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {getCat} from '../actions/catPicAction';

const CatPic = props => {
  console.log('this is cat', props.cat);
  console.log('this is cat file', props.cat.file);

  return (
    <div>
      {!props.cat && !props.isFetching && <p>Wanna see a cat?</p>}
      {props.isFetching && (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      )}
      {props.cat && <img src={props.cat.file} alt='a random pic of a cat'></img>}
      <button onClick={props.getCat}></button>
    </div>
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