import React from "react";
import { connect } from "react-redux";
import { getDog } from "../actions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 700,
  },
}));

const CuteDogs = ({ getDog, isFetching, dogImg, error, props }) => {
  const classes = useStyles();
  if (isFetching) {
    return <h2>Fetching a Dog Image now 🐕 </h2>;
  } else {
    return (
      <div>
        <div style={{ backgroundColor: "#43e0d9" }} className={classes.root}>
          <Card style={{ backgroundColor: "#409cff" }}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
              {dogImg.map((dog, index) => (
                <GridListTile>
                  <img src={dog} key={index} />
                </GridListTile>
              ))}
            </GridList>
            <Button variant="contained" color="secondary" onClick={getDog}>
              Get Dog album
            </Button>
          </Card>
        </div>

        <div>
          {/* <Card style={{ backgroundColor: "#409cff" }} >
            <CardMedia >
              <img style={{ borderRadius: "10px" }} width="500" src={dogImg} />
            </CardMedia>
            <Button variant="contained" color="secondary" onClick={getDog}>
              Get Dog album
            </Button>
          </Card> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dogImg: state.dogImg,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getDog })(CuteDogs);