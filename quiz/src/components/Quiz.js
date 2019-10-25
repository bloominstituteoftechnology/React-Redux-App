import React from "react";

function Quiz(props) {
  console.log("quiz", props);
  return <div>{props.question}?</div>;
}

export default Quiz;
