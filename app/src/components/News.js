import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions";

const News = ({ getNews, news, isFetching }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>News: {news} </h2>
      <button onClick={getNews}>Get the News</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { News: state.news };
};

const mapDispatchToProps = { getNews };

export default connect(mapStateToProps, mapDispatchToProps)(News);
