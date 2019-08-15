import React from "react";

const Today = props => {
  console.log("today test:", props);
  return (
    <div>
      <h1>{props.stuff.date}</h1>
      <h1>{props.stuff.copyright}</h1>
      <p>{props.stuff.explanation}</p>
      <img src={props.stuff.hdurl} alt="" />
    </div>
  );
};

export default Today;
