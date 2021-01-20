import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHouses } from "./store/actions/index";
import House from "./components/House";
import HouseNav from "./components/HouseNav";

function App(props) {
  useEffect(() => {
    props.getHouses();
  }, []);

  const getDisplayHouse = (houseName) => {
    return props.houses.find((house) => house.name === houseName);
  };

  return (
    <div>
      <h1 className="text-4xl p-10 bg-green-500 text-center">Houses of Westeros</h1>
      <div className="flex">
      <HouseNav />
      { props.displayHouse ? <House house={getDisplayHouse(props.displayHouse)} /> : ''}
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
    displayHouse: state.displayHouse,
    error: state.error,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getHouses })(App);
