import React from "react";
import SingleQuote from "./SingleQuote";
//redux stuff
import { connect } from "react-redux";
import { getData } from "../actions";
//
import Loader from "react-loader-spinner";

const QuotesComponent = ({ getData, error, quotes, loading }) => {
  // console.log(props);
  const handleGetData = e => {
    e.preventDefault();
    getData();
  };
  return (
    <div>
      <div>
        {!error ? (
          loading ? (
            <Loader type="Puff" color="#00BFFF" height={177} width={300} />
          ) : (
            <div style={{ height: "15vh" }}>
              {quotes.map(q => (
                <SingleQuote
                  error={error}
                  author={q.author}
                  loading={loading}
                  quote={q.title}
                  key={q.author}
                />
              ))}
              <button
                style={{
                  color: "green",
                  textShadow: ".2px .2px .5px white",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  marginTop: "4em",
                  fontFamily: "serif",
                  marginBottom: "5em",
                  border: "none",
                  backgroundColor: "transparent"
                }}
                onClick={handleGetData}
              >
                {" "}
                New Quote
              </button>
            </div>
          )
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
};

const MSTP = state => {
  // console.log(state);
  return {
    quotes: state.quotes,
    loading: state.loading,
    error: state.error
  };
};

export default connect(MSTP, { getData })(QuotesComponent);
