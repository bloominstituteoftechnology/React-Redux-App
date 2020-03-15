import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";
import ScrollAnimation from "react-animate-on-scroll";

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

        {props.clicked &&
          !props.isFetching &&
          props.cards.map(
            a =>
              a !== undefined && (
                <ScrollAnimation
                  offset={0}
                  animateIn="lightSpeedIn"
                  className="logo-con"
                  animateOnce="true"
                >
                  <img src={a} alt="card" />{" "}
                </ScrollAnimation>
              )
          )}
      </div>
      <button
        onClick={e => {
          openBooster(e);
          props.clickBooster();
          console.log(props.clicked);
        }}
        style={
          props.isFetching ? { display: "none" } : { display: "inline-block" }
        }
      >
        test
      </button>
    </>
  );
}
