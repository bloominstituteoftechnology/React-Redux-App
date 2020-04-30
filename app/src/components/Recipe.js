import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRandomRecipe } from '../actions/actions';

const Recipe = ({ fetchRandomRecipe, recipeName, recipeImg, recipeUrl, recipeYouTube, isFetching, error }) => {
    useEffect(()=> {
        fetchRandomRecipe();
    }, [fetchRandomRecipe]);

    const fetchRecipe = e => {
        e.preventDefault();
        fetchRandomRecipe();
    };

    if (isFetching) {
        return <p><span role="img" aria-label="sparkles">✨</span>loading new recipe<span role="img" aria-label="sparkles">✨</span></p>;
    }
    
    let thing = recipeUrl;
    if (recipeUrl === '') {
        thing = recipeYouTube;
        console.log('no url')

    } else {
        console.log('yes url')
    }

    return (
        <div>
            <h1>{recipeName}</h1>
            <img src={recipeImg} alt={recipeName} />
            <h4><a href={thing}>view recipe</a></h4>
            <button onClick={fetchRecipe}>new recipe</button>
            <h3 className="errorMsg">{error}</h3>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        recipeName: state.recipeName,
        recipeImg: state.recipeImg,
        recipeUrl: state.recipeUrl,
        recipeYouTube: state.recipeYouTube,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchRandomRecipe: fetchRandomRecipe}
)(Recipe);