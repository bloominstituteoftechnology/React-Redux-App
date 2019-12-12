import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import {getCat} from '../actions/catPicAction';

const CatPic = props => {

  return (
    <div>
      cat
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    id: state.id,
  }
}

export default connect(mapStateToProps, {getCat})(CatPic);