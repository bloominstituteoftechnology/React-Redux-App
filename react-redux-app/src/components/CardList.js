import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const CardList = (props) => {
  console.log("CardList: ", props)
  useEffect(() => {
      props.getData();
    }, []);

  return (
    <>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.cards.map(card => <div>{card.name}</div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(CardList);