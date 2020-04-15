import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const SingleCocktail = () => {
  const { path, url } = useRouteMatch();

  console.log(url);
  return (
    <div className="single-cocktail">
      <div className="img-container">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
          alt=""
        />
      </div>
      <div className="information">
        <h3>name</h3>

        <div className="btn">
          <Link to={`/des/23`}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
