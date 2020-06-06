import React from "react";
import "./App.css";
import * as animate from "animate.css";

import Activity from "./components/Activity";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <h1 className="m-title">Crypto Currency Price Tracker</h1>
      <Activity />
      <div className="priceLoader" id="loading">
        <div className="circle-wrapper">
          <span className="circle circle-1"></span>
          <span className="circle circle-2"></span>
          <span className="circle circle-3"></span>
          <span className="circle circle-4"></span>
          <span className="circle circle-5"></span>
          <span className="circle circle-6"></span>
          <span className="circle circle-7"></span>
          <span className="circle circle-8"></span>
        </div>
        <div className="loading-text">getting prices...</div>
      </div>

      <svg>
        <defs>
          <filter
            id="gradient"
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
            1 0 0 0 0
            1 0 0 0 0
            0 0 0 1 0"
              in="SourceGraphic"
              result="colormatrix"
            />
            <feComponentTransfer in="colormatrix" result="componentTransfer">
              <feFuncR type="table" tableValues="0.43 0.48" />
              <feFuncG type="table" tableValues="0.43 0.48" />
              <feFuncB type="table" tableValues="0.43 0.48" />
              <feFuncA type="table" tableValues="0 0.4" />
            </feComponentTransfer>
            <feBlend
              mode="normal"
              in="componentTransfer"
              in2="SourceGraphic"
              result="blend"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
