import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "25%",
    padding: "2rem 1%",
    margin: "1%",
    minHeight: "150%"
  },
  title: {
    textDecoration: "none",
    color: "black",
  },
});

const Brewery = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <h2>
        <a className={classes.title} href={props.brewery.website_url}>
          {props.brewery.name}
        </a>
      </h2>
      <address>
        Address: {props.brewery.street}, {props.brewery.city},{" "}
        {props.brewery.state} {props.brewery.postal_code}
      </address>
      <p>Phone: {props.brewery.phone}</p>
      <br />
    </Paper>
  );
};

export default Brewery;