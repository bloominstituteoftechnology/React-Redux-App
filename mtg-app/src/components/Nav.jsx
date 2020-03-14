import React from "react";
import { NavLink } from "react-router-dom";
/* import logo from "../images/truck-logo.png";
import "../scss/NavStyle.scss";
 */ import ScrollAnimation from "react-animate-on-scroll";

const Navbar = () => {
  return (
    <header className="header-section">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        animateOnce="true"
        className="logo-con"
      />
      {/* <img className="logo-img" src={logo} alt="FoodTruck Logo" />
      </ScrollAnimation> */}

      <nav className="nav-bar">
        <NavLink to="/" exact activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/throne_of_eldraine" exact activeClassName="activeLink">
          Throne of Eldraine
        </NavLink>
        <NavLink to="/modern_horizons" exact activeClassName="activeLink">
          Modern Horizons I
        </NavLink>
        <NavLink to="/war_of_the_spark" exact activeClassName="activeLink">
          War of the Spark
        </NavLink>
        <NavLink to="/ravnica_allegiance" exact activeClassName="activeLink">
          Ravnica Allegiance
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
