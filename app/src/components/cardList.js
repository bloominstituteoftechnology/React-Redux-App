import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
const CardList = (props) => {
  return (
    <>
      {/* if fetching the data from the api fail we get error */}
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.data.map((pokemon) => (
          <div key={pokemon.id}>
            <div className="cards">
              <div>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    alt="Card image cap"
                    src={pokemon.imageUrl}
                    alt="Pokemon Card"
                  />
                  <CardBody>
                    <CardTitle>{pokemon.name}</CardTitle>
                    <CardSubtitle>Number: {pokemon.number}</CardSubtitle>
                    <CardText>
                      Rarity: {pokemon.rarity} Type: {pokemon.subtype}
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CardList);
