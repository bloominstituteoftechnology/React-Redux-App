import React from "react";
import { connect } from "react-redux";

const ListOfCards = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <p>Loading...</p>
      ) : props.err ? (
        <p>{props.err}</p>
      ) : (
        props.cards.map((card) => {
          return <li key={card.multiverseid}>{card.name}</li>;
        })
      )}
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {
    cards: state.cards,
    isFetching: state.isFetching,
    err: state.err,
  };
};
export default connect(mapStatetoProps)(ListOfCards);
