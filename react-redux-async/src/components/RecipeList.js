import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actions';

const RecipeList = (props) => {

    useEffect(() => {
        props.getRecipes();
    }, []);

    return (
        <div>
        <h2>Recipes</h2>
        <div className='main-page'>
          
            {props.isLoading ? <p>Loading Recipes...</p> : null}
            {props.error ? <p>{props.error}</p> : null}
            {props.recipes.map((recipe) => (
              <div className='recipe-container'>  
                <div className='recipe-div'>
                  <img src={recipe.thumbnail} alt=''/>
                  <div>
                    <h4>{recipe.title}</h4>
                    <a href={recipe.href}>Get Recipe</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>  
    );
};

const mapStateToProps = (state) => {

    return {
        isLoading: state.isLoading,
        recipes: state.recipes,
        error: state.error
    };
};


export default connect(mapStateToProps, { getRecipes })(RecipeList);