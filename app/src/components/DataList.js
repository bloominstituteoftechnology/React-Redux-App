import React from "react";
import { connect } from 'react-redux';
import { getXkcd } from '../actions';

class DataList extends React.Component {

componentDidMount () {
  this.props.getXkcd();
}

  render() {
    return (
    <div>Data List</div>
    )
  }
};

export default connect(null, { getXkcd })(DataList);
