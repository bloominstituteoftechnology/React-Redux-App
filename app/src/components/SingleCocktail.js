import React from "react";
import { Link } from "react-router-dom";

const SingleCocktail = ({ data }) => {
  const { idDrink, strDrink, strDrinkThumb } = data;

  return (
    <div className="single-cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="information">
        <h3>{strDrink}</h3>

        <div className="btn">
          <Link to={`/des/${idDrink}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
