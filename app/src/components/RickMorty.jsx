import React, { useState } from "react";
import { connect } from "react-redux";
import { addCharacter, removeCharacter } from "../actions";
import { Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RickMorty(props) {
  const [id, setId] = useState(1);

  return (
    <>
      <Button
        style={{ margin: "10px auto 50px auto" }}
        onClick={() => {
          props.addCharacter(id);
          setId(id < 400 ? id + 1 : 1);
        }}
      >
        Add Character
      </Button>
      <Spinner
        animation="border"
        style={{
          display: props.isLoading ? "block" : "none",
          margin: "0 auto",
        }}
      />
      <h2>Rick & Morty Show Characters</h2>
      <p style={{ display: props.isError ? "block" : "none" }}>
        Error Loading... {props.error}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "1500px",
          margin: "20px auto",
        }}
      >
        {props.characters &&
          props.characters.map((char) => {
            return (
              <div key={char.id} style={{ order: -char.id }}>
                <Card
                  style={{
                    width: "18rem",
                    margin: "20px",
                    display: props.isLoading ? "none" : "block",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={char.image}
                    style={{ width: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Card.Text style={{ textAlign: "left" }}>
                      <p>
                        <span className="font-weight-bold">Status: </span>
                        {char.status}
                      </p>
                      <p>
                        <span className="font-weight-bold">Gender: </span>
                        {char.gender}
                      </p>
                      <p>
                        <span className="font-weight-bold">Location: </span>
                        {char.location.name}
                      </p>
                      <p>
                        <span className="font-weight-bold">Species: </span>
                        {char.species}
                      </p>
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => {
                        props.removeCharacter(char.id);
                      }}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addCharacter, removeCharacter })(
  RickMorty
);
