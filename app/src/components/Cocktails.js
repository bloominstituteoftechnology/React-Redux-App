import React from "react";
import SingleCocktail from "./SingleCocktail";

const Cocktails = ({ data }) => {
  return (
    <div className="cocktails">
      {data.map((item) => (
        <SingleCocktail key={item.idDrink} data={item} />
      ))}
    </div>
  );
};

export default Cocktails;
