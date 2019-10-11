import React from 'react';

const Fact = props => {
  console.log(props.fact)
  return <img className='dog-image' src={props.fact}/>;
};

export default Fact;
