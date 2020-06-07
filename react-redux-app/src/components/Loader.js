import React from "react";

const Loader = (props) => {
  return (
    <div className="loader-wraper">
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
    </div>
  );
};

export default Loader;
