import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const SingleCocktail = () => {
  const { path, url } = useRouteMatch();

  console.log(url);
  return (
    <div className="Desc">
      <div className="cocktail-desc">
        <div className="img-container">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
            alt=""
          />
        </div>
        <div className="information-desc">
          <h3>name</h3>
          <p>alcoholic</p>
          <p>cocktail glass</p>
          <p>instructions</p>
          <div className="ingredients">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-desc">
        <Link to={`/`}>Go Back</Link>
      </div>
    </div>
  );
};

export default SingleCocktail;
