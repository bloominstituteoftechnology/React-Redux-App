import React from "react";

export default function DealBox(props) {
  const deal = props.deal;

  return <div>{deal.title}</div>;
}
