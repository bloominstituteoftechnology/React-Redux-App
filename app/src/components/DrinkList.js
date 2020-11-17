import React from 'react';
import { connect } from 'react-redux';

const DrinkList = (props) => {
    return (
    <>        
        {
            props.isFetching ? (    
            <div>***FETCHING DATA***</div>
            ) : props.error ? 
            ( <div style={{color:'red'}}>{props.error}</div>
            ) : (
            props.drinklist.map((drink) => {
            return <div>{drink.strDrink}</div>
            })
            )
        }
    </>
    );
}

const mapStateToProps = state => {
    return {
        isFetching: state.is_fetching,
        drinklist: state.drinklist,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(DrinkList);