import React from 'react';
import Moment from 'react-moment';
import '../App.css';

const History = props => {
  return (
    <div className='article'>
      <h1>{props.article.title}</h1>
      <h3>
        <Moment format='MM/DD/YYYY'>
          {props.article.event_date_utc}
        </Moment>
      </h3>
      <h2>{props.article.details.length > 200 ? 
        (
          <h2 className='reduced'>{`${props.article.details.substring(0, 207)}...`}</h2>
        ) : <h2>{props.article.details}</h2>}
      </h2>
      <button><a href={props.article.links.article}>Read More</a></button>
    </div>
  );
}

export default History;