import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner'
import { fetchCard } from '../store/actions/cardAction';


const MagicTheGathering = (props) => {
    useEffect(() => {

        props.fetchCard()
    }, [props]);

   return ( <div>
       {/* {props.isFetching && (<Loader />)} */}
    <h1>Cards</h1>
    {props.card && <h3>"{props.card}"</h3>}
    <button onClick={props.fetchCard}>Fetch a new quote</button>

    </div>
   )
}

const mapStateToProps = state => {
    return {
        card: state.card.card,
        isFetching: state.card.isFetching,
        error: state.card.error,
    }
}

export default connect(mapStateToProps, 
    { fetchCard })
    (MagicTheGathering);