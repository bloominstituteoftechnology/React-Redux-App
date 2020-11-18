import React from 'react';
import { connect } from 'react-redux';


const DrinkList = (props) => {
    console.log("This is props.drinklist", props.drinklist)
    return (
    <div>
        <div>
            {
            props.isFetching ? (
            <h4>Data is loading</h4>
            ) : props.error ? (
                <div>{props.error}</div>
            ) : (
                props.drinklist.drinks !== undefined && props.drinklist.drinks.map((drink) => {
                    return  <div className="container">
                                <div className="card">
                                    <div className="name">
                                        {drink.strDrink}
                                    </div>
                                    <div>
                                        <img src={drink.strDrinkThumb} alt="" width="150px"></img>
                                    </div>
                                </div>
                            </div>
                })
            )
            }  
        </div>
        <div>
        </div>        

    </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.is_fetching,
        drinklist: state.drinklist,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(DrinkList);