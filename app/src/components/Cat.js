import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getImage } from "../actions";
import { Spinner } from "reactstrap";
import Button from "@material-ui/core/Button";

const Cat = (props) => {
  const match = useRouteMatch();

  const handleGetImg = (e) => {
    e.preventDefault();

    props.getImage(match.params.catID);
  };

  useEffect(() => {
    props.getImage(match.params.catID);
  }, []);
  const catItem = props.breeds.find((breed) => breed.id === match.params.catID);
  console.log("catItem image", catItem);
  return (
    <div className="cat-container">
      {props.isFetchingData ? (
        <div style={{ margin: "6rem auto" }}>
          <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />{" "}
        </div>
      ) : (
        <div className="photo">
          <img alt="cat" src={catItem.image} style={{ width: "600px" }}></img>
        </div>
      )}
      <div className="desc">
        <h1 style={{ textAlign: "center" }}>{catItem.name}</h1>
        <p> {catItem.description}</p>
        <p>Life span: {catItem.life_span} years</p>
        <p>Dog friendly level: {catItem.dog_friendly} </p>
        <p>Energy level: {catItem.energy_level}</p>
        <p>Hypoallergenic level: {catItem.hypoallergenic}</p>
        <p>Hairless level: {catItem.hairless}</p>
        <p>
          Wikipedia:{" "}
          <a
            href={catItem.wikipedia_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {catItem.wikipedia_url}
          </a>
        </p>
        <Button
          style={{ with: "60%", marginTop: "2rem" }}
          onClick={handleGetImg}
          variant="contained"
          color="primary"
        >
          {`Refresh photo of ${catItem.name} breed`}
        </Button>
      </div>
    </div>
  );
};
//export default Cat;
const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getImage })(Cat);
