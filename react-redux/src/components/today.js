import React from "react";
import { Card, CardContent } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Today = props => {
  console.log("today test:", props);
  return (
    <Card>
      <h1>{props.stuff.date}</h1>
      <h1>{props.stuff.copyright}</h1>
      <p>{props.stuff.explanation}</p>
      <Card.Meta>
      <img class="photo" src={props.stuff.hdurl} alt="" />
      </Card.Meta>
    </Card>
  );
};

export default Today;