import React from "react";
import { connect } from 'react-redux';
import { getData } from '../actions';

class DataList extends React.Component {

componentDidMount () {
  this.props.getData();
}

renderSayings() {
  return this.props.sayings.map(saying => {
    return(
      <div className='item' key={saying.id}>
        <i className='large middle aligned icon keyboard' />
        <div className='content'>
          <div className='description'>
            <h3>{saying.quote}</h3>
            <p>{saying.author}</p>
          </div>
        </div>

      </div>
    )
  })
}

  render() {
    console.log('props', this.props);
    
    return (
    <div className='ui relaxed divided list'>{this.renderSayings()}</div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log('state', state);
  return { sayings: state}
  
}

export default connect(mapStateToProps, { getData })(DataList);
