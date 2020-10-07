import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleCocktail = ({ data }) => {
  const { id } = useParams();

  const singleDrink = data.find((drink) => drink.idDrink === id);
  const {
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = singleDrink;
  return (
    <div className="Desc">
      <div className="cocktail-desc">
        <div className="img-container">
          <img src={strDrinkThumb} alt={strDrink} />
        </div>
        <div className="information-desc">
          <h3>{strDrink}</h3>
          <p>
            type: <span>{strAlcoholic}</span>
          </p>
          <p>
            category: <span>{strCategory}</span>
          </p>
          <p>
            serve in: <span>{strGlass}</span>
          </p>
          <p>
            instructions: <span>{strInstructions}</span>
          </p>
        </div>
      </div>
      <div className="btn-desc">
        <Link to={`/`}>Go Back</Link>
      </div>
    </div>
  );
};

export default SingleCocktail;
