import React from "react";
import "../scss/home.scss";
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <>
      <div className="content-wrapper">
        <video autoPlay="autoplay" loop="loop">
          <source
            type="video/mp4"
            src="https://media.magic.wizards.com/AVS2efHWWj_0.mp4"
          />
        </video>
        <div className="text-content">
          <h1>Magic the Gathering Booster simulator</h1>
          <h2>open mock boosters from the latest sets</h2>

          <Link to="/throne_of_eldraine" onClick={props.resetBooster}>
            <span className="btn">Try It Now </span>
          </Link>
        </div>
        <h3>Made by love 2020</h3>
      </div>
    </>
  );
}
