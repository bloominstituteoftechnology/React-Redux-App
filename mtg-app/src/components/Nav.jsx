import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../scss/nav.scss";
import logo from "../img/MX_Nav_EN.png";
import ScrollAnimation from "react-animate-on-scroll";

const Navbar = props => {
  window.addEventListener("resize", function() {
    if (window.innerWidth > 1041)
      document.querySelector(".nav-bar").classList.remove("menu-open");
  });
  return (
    <header className="header-section">
      <ScrollAnimation
        offset={0}
        animateIn="fadeIn"
        animateOnce="true"
        className="logo-con"
      >
        <Link
          onClick={props.resetBooster}
          to="/"
          exact
          activeClassName="activeLink"
        >
          <img className="logo-img" src={logo} alt="mtg Logo" />
        </Link>
      </ScrollAnimation>
      <div
        class="hamburger"
        onClick={() => {
          document.querySelector(".nav-bar").classList.toggle("menu-open");
        }}
      >
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <nav className="nav-bar">
        <NavLink
          to="/throne_of_eldraine"
          onClick={props.resetBooster}
          exact
          activeClassName="activeLink"
        >
          <i class="ss ss-eld" /> Throne of Eldraine
        </NavLink>
        <NavLink
          to="/modern_horizons"
          onClick={props.resetBooster}
          exact
          activeClassName="activeLink"
        >
          <i class="ss ss-mh1" />
          Modern Horizons I
        </NavLink>
        <NavLink
          to="/war_of_the_spark"
          onClick={props.resetBooster}
          exact
          activeClassName="activeLink"
        >
          <i class="ss ss-war" />
          War of the Spark
        </NavLink>
        <NavLink
          onClick={props.resetBooster}
          to="/ravnica_allegiance"
          exact
          activeClassName="activeLink"
        >
          <i class="ss ss-rna" />
          Ravnica Allegiance
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
