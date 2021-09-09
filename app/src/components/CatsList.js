import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { getData } from "../actions";
import BreedCard from "./BreedCard";

const CatsList = (props) => {
  return (
    <Container style={{ marginTop: "1rem" }}>
      <Row>
        {props.error ? (
          <div className="error">{props.error}</div>
        ) : (
          props.breeds
            .filter((itemName) => {
              return itemName.name
                .toLowerCase()
                .includes(props.searchTerm.toLowerCase());
            })
            .map((breed) => (
              <BreedCard
                key={breed.id}
                breed={breed}
                setSearchToggle={props.setSearchToggle}
                searchTerm={props.searchTerm}
                setSearchTerm={props.setSearchTerm}
              />
            ))
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(CatsList);
