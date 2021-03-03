import React from "react";
import { connect } from "react-redux";
import { getRecipe } from "../actions";

const baseUri = "https://spoonacular.com/recipeImages/";

const Recipe = (props) => {
  const data = props.recipe;

  if (props.loading) {
    return (
      <>
        <h2 style={{alignSelf: 'center'}}>Loading...</h2>
      </>
    );
  }

  return (
    <div className="d-flex container flex-row justify-content-center align-items-lg-center flex-wrap">
      {data &&
        data.map((item, idx) => {
          return (
            <div
              className="d-flex cards flex-column container justify-content-center align-items-lg-center"
              key={idx}
              style={{
                width: "35%",
                margin: "3rem 2rem",
                border: "2px solid black",
                textAlign: "center",
                color: 'white'
              }}
            >
              {" "}
              <h3 style={{ margin: "3rem 0" }}>
                <a href={data[idx].sourceUrl} style={{ color: "white" }}>
                  {data[idx].title}
                </a>
              </h3>
              <img
                src={baseUri + data[idx].image}
                alt={data[idx].title}
                style={{
                  maxWidth: "80%",
                  minWidth: "80%",
                  marginBottom: "3rem",
                }}
              />
              <h5>Ready in: {data[idx].readyInMinutes} mins</h5>
              <h5 style={{ marginBottom: "2rem" }}>
                Serves: {data[idx].servings}
              </h5>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    recipe: state.recipe,
  };
};

const mapDispatchToProps = { getRecipe };

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
