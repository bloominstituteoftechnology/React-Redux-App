import React from "react";

const House = (props) => {
  const house = props.house;

  return (
    <div className="w-7/12 p-5 mx-auto">
      <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 className="text-2xl">{house.name}</h2>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p>
            Based in {house.region}, {house.name} bears flags with { house.coatOfArms }. </p>
            
            {house.words ? <p className="my-4"> They can be heard chanting
            <span className="italic"> {house.words} </span>
            as they ride into battle.</p>:''}
          
        </div>
      </div>
    </div>
  );
};

export default House;
