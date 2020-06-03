import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import BreweryCard from './breweryCard';
import { getBrewery } from '../store/actions';


const BreweryList = props => {
console.log(props)
  const { getBrewery, brewery, isFetching, url } = props

  useEffect(() => {
    getBrewery(url);
    },[url])

    if (isFetching) {
        return <h1>Breweries are coming!</h1>
    }
    return (
     <div className="cardContainer">
        
        {brewery.map(item => 
        <BreweryCard 
            key={item.id} 
            item={item}
            />
        )}
     </div>
 );
};

const mapsStateToProps = state => {
    return {
        brewery: state.brewery,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapsStateToProps, 
    {getBrewery}
    )(BreweryList);