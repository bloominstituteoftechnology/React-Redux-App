import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCard } from '../store/actions/cardAction';
import Loader from 'react-loader-spinner';


const MagicTheGathering = (props) => {
    useEffect(() => {
        props.fetchCard()
    }, []);

   return ( 
   <div>
    <h1>Cards</h1>
    {props.isFetching && (<Loader type="Grid" color="#00BFFF" height={80} width={120} />)}
   {props.card && props.card.map(c => {
       return (
            <h3>{c.name}</h3>
       )
   })}
    <button onClick={props.fetchCard}>get a magic card</button>

    </div>
   )
}

const mapStateToProps = (state) => {
    console.log("myState", state)
    return {
        card: state.card.card,
        isFetching: state.card.isFetching,
        error: state.card.error, 
    }
   
}

export default connect(mapStateToProps, 
    { fetchCard })
    (MagicTheGathering);