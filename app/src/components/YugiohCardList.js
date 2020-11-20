import React from "react";
import { connect } from "react-redux";

const CardList = (props) => {
  return (
    <>
      {
       
        props.isFetching ? (
          <div> ---retrieving card info--- </div>
        ) : props.error ? (
          <div>{props.error}</div>
        ) : (
          props.cardlist.map((card) => {
            return <div>{card.data}</div>;
          })
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.is_fetching,
    cardlist: state.joblist,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(CardList);