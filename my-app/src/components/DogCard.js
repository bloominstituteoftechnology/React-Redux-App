import React from 'react';
import '../App.css';

const DogCard = props => {
    return (
        <div>
            {props.item.map(doggo => {
                return <img className='DogCard' src={doggo} key={doggo} alt='doggos' />
            })}
        </div>
    );
}

 export default DogCard