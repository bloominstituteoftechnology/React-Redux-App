import React from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";

const ListOfCards = (props) => {
  return (
    <div>
      {props.isFetching ? (
        <p>Loading...</p>
      ) : props.err ? (
        <p>{props.err}</p>
      ) : (
        <Container>
          {props.cards.map((card) => {
            return (
              <img
                key={card.multiverseid}
                src={card.imageUrl}
                style={{ margin: "5px" }}
              />
            );
          })}
        </Container>
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
