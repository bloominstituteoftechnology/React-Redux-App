import React from "react";
import { connect } from "react-redux";
// import { fetchHeroes } from "../actions/actions";
import { getHeroes } from "../actions/actions";
import Hero from "./Hero";

// function HeroList(props) {
//   console.log("HeroList", props);

//   return (
//     <>
//       <button onClick={() => props.fetchHeroes()}>Get Heroes</button>
//       {props.isFetching && <div>Fetching</div>}
//       {console.log(HeroList)}
//       <ul>
//         {props.heroes.map(h => (
//           <li key={h.name}>{h.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const mapDispatchToProps = {
//   fetchHeroes
// };

// export default connect(
//   state => state,
//   mapDispatchToProps
// )(HeroList);

const HeroList = props => {
  const fetchHeroes = e => {
    e.preventDefault();
    props.getHeroes();
  };
  console.log(props.heroes);
  return (
    <>
      {props.isFetching && <p>Fetching Heroes</p>}
      <div className="HeroList">
        {props.heroes.map(hero => (
          <Hero hero={hero} />
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchHeroes}>Fetch Heroes!</button>
    </>
  );
};

const mapStateToProps = state => ({
  heroes: state.heroes,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getHeroes }
)(HeroList);
