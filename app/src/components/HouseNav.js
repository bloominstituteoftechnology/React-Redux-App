import React from "react";
import { connect } from "react-redux";
import { setDisplayHouse } from "../store/actions";

const HouseNav = (props) => {
  const handleClick = (e) => {
    props.setDisplayHouse(e.target.innerText);
  };

  return (
    <div className="flex flex-col border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-auto">
      <div className="flex items-center flex-shrink-0 px-4"></div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
      <a href="#" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-mediumrounded-md">
        <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" -->
        Dashboard
      </a> */}
          {props.houses.map((house) => (
            <button
              key={house.name}
              onClick={handleClick}
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              {house.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export default connect(mapStateToProps, { setDisplayHouse })(HouseNav);
