import React from "react";
import { connect } from "react-redux";

const HeroStats = props => {
  const setAttrClass = attr => {
    switch (attr) {
      case "str":
        return "primary_attr-str";
      case "agi":
        return "primary_attr-agi";
      case "int":
        return "primary_attr-int";
      default:
        return "primary_attr-str";
    }
  };
  return (
    <div className="Hero">
      <h2> {props.hero.localized_name}</h2>
      <h3 className={setAttrClass(props.hero.primary_attr)}>
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
