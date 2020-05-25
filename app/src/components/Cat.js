import React, { useEffect } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  //   useParams,
  //   Route,
  //   Link,
  //   NavLink,
  //   Switch,
  useRouteMatch,
} from "react-router-dom";
import { connect } from "react-redux";
import { getImage } from "../actions";
const Cat = (props) => {
  //const classes = useStyles();
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
      <div className="photo">
        <img src={catItem.image} style={{ width: "600px" }}></img>
      </div>
      <div className="desc">
        <h1 style={{ textAlign: "center" }}>{catItem.name}</h1>
        <p> {catItem.description}</p>
        <p>Life span: {catItem.life_span} years</p>
        <p>Dog friendly level: {catItem.dog_friendly} </p>
        <p>Energy level: {catItem.energy_level}</p>
        <p>Hypoallergenic level: {catItem.hypoallergenic}</p>
        <p>Hairless level: {catItem.hairless}</p>
        <p>
          Wikipedia: <a href={catItem.wikipedia_url}>{catItem.wikipedia_url}</a>
        </p>
      </div>
    </div>
  );
};
//export default Cat;

export default connect(null, { getImage })(Cat);
