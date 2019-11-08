import React from "react";
import { connect } from "react-redux";

const HeroStats = props => {
  return (
    <div className="Hero">
      <h2> {props.hero.localized_name}</h2>
      <h3 className={`primary_attr${props.hero.primary_attr ? " str" : "agi"}`}>
        {`${props.hero.primary_attr}`.toUpperCase()}
      </h3>
      <h3 className="attackType">{props.hero.attack_type}</h3>
    </div>
  );
};

export default HeroStats;

// const mapStateToProps = state => {
//   return {
//     heroes: state.heroes,
//     error: state.error,
//     isFetching: state.isFetching
//   };
// };

// export default connect(
//   mapStateToProps,
//   {HeroStats}
// )(HeroList);
