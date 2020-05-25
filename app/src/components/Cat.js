import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getImage } from "../actions";
import { Spinner } from "reactstrap";
const Cat = (props) => {
  console.log("Cat props", props);
  // const { catId } = useParams();

  const match = useRouteMatch();

  // console.log("catItem", catItem);
  //   const handleGetImg = (e) => {
  //     e.preventDefault();
  //     // props.getImage(props.breed.id);
  //     props.getImage(match.params.catID);
  //   };
  useEffect(() => {
    props.getImage(match.params.catID);
  }, []);
  const catItem = props.breeds.find((breed) => breed.id === match.params.catID);
  console.log("catItem", catItem);
  return (
    <div className="cat-container">
      {props.isFetchingData ? (
        <div style={{ margin: "6rem auto" }}>
          <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />{" "}
        </div>
      ) : (
        <div className="photo">
          <img src={catItem.image} style={{ width: "600px" }}></img>
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
          <a href={catItem.wikipedia_url} target="_blank">
            {catItem.wikipedia_url}
          </a>
        </p>
      </div>
    </div>
  );
};
//export default Cat;

export default connect(null, { getImage })(Cat);
