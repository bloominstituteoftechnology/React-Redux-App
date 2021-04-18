import React from "react";
import { connect } from "react-redux";
import { getRecipe } from "../actions";
import LinearProgress from "@material-ui/core/LinearProgress";

const baseUri = "https://spoonacular.com/recipeImages/";

const Recipe = (props) => {
  const data = props.recipe;

  if (props.loading) {
    return (
      <>
        <LinearProgress style={{ alignSelf: "center", }} />
      </>
    );
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
      {data &&
        data.map((item, idx) => {
          return (
            <div
              className="d-flex cards flex-column justify-content-center"
              key={idx}
              style={{
                width: "400px",
                height: "100vh",
                margin: "3vh 3vw",
                border: "2px solid black",
                color: "white",
                padding: "0vh 0vw",
                textAlign: "center",
              }}
            >
              <a
                href={data[idx].sourceUrl}
                style={{
                  color: "white",
                  alignSelf: "center",
                  justifySelf: "center",
                  fontSize: '1.5rem'
                }}
              >
                {data[idx].title}
              </a>

              <img
                src={baseUri + data[idx].image}
                alt={data[idx].title}
                style={{
                  width: "100%",

                  padding: "5vh 5vw",
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
