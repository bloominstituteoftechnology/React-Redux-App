import React from "react";

export default function Dealer(props) {
  return (
    <div>
      <h3>Dealer's cards:</h3>
      {props.cards.map((item) => {
        return( <img src={item.image} alt={item.image} />);
      })}
    </div>
  );
}
