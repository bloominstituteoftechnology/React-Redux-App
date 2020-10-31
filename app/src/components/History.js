import React from 'react';
import Moment from 'react-moment';

const History = props => {
  return (
    <div className='article'>
      <h1>{props.article.title}</h1>
      <h3>
        <Moment format='MM/DD/YYYY'>
          {props.article.event_date_utc}
        </Moment>
      </h3>
      <h2>{props.article.details.length > 250 ? 
        (
          <h2 className='reduced'>{`${props.article.details.substring(0, 250)}...`}</h2>
        ) : <h2>{props.article.details}</h2>}
      </h2>
      <a href={props.article.links.article}><button>Read More</button></a>
    </div>
  );
}

export default History;