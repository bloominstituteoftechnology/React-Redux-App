import React from "react";

const Nav = (props) => {
  return (
    <div className="navbar">
      <div className="menu">
        <div className="first">
          <a>Home</a>
          <a>History</a>
        </div>
        <div className="second">
          <a>Log In</a>
        </div>
      </div>
      <div id="glowbar"></div>
    </div>
  );
};

export default Nav;
