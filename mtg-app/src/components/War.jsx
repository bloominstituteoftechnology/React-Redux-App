import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/core";
import ScrollAnimation from "react-animate-on-scroll";
import "../scss/eldraine.scss";

export default function Eldraine(props) {
  const openBooster = e => {
    e.preventDefault();
    props.getBooster("war");
  };
  const override = css`
    display: inline-block;
    position: absolute;
    top: 75%;
    left: 50%;
    @media screen and (max-width: 920px) {
      top: 55%;
    }
  `;
  return (
    <>
      <div className="content-wrapper">
        <video
          autoPlay="autoplay"
          loop="loop"
          poster="https://media.wizards.com/2019/images/magic/m20/M20_Preloader_Av7E.jpg"
        >
          <source
            type="video/mp4"
            src="https://media.wizards.com/2019/images/magic/m20/M20_Key_Sav4t0n.mp4"
          />
        </video>
        <div className="text-content">
          <h1>War of the Sparks</h1>
          <h2>try your luck in this planeswalker themed set</h2>

          <button
            className="btn2"
            onClick={e => {
              openBooster(e);
              props.clickBooster();
              console.log(props.clicked);
            }}
            style={
              props.isFetching
                ? { display: "none" }
                : { display: "inline-block" }
            }
          >
            Open Booster Pack
          </button>
        </div>
        <h3>Made with love 2020</h3>
      </div>

      <div className="sweet-loading">
        <PropagateLoader
          css={override}
          size={20}
          color={"white"}
          loading={props.isFetching}
        />
        <div className="card-container">
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
      </div>
    </>
  );
}
