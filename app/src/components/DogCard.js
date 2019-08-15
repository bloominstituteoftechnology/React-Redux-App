import React from 'react';

const DogCard = props => {
  return (
    <div>
      {/* <h1>{props.doglist} </h1> */}
      <img src={props.doglist}/>
    </div>
  );
};

export default DogCard;
