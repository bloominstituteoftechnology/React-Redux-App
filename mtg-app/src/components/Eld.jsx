import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";

export default function Eldraine(props) {
  const openBooster = e => {
    e.preventDefault();
    props.getBooster("eld");
  };
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <>
      <h1>eldraine</h1>
      <div className="sweet-loading">
        <PropagateLoader
          css={override}
          size={20}
          color={"#123abc"}
          loading={props.isFetching}
        />
        {!props.isFetching && props.cards.map(a => <img src={a} alt="card" />)}
      </div>
      <button onClick={openBooster}>test</button>
    </>
  );
}
