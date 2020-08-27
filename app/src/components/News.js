import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "../actions/newsActions";

const News = (props) => {
  useEffect(() => {
    props.getNews();
  }, [props.getNews]);

  if (props.isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>News: {props.articleTitle} </h2>
      <button onClick={props.getNews}>Get the News</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return { articleTitle: state.articleTitle };
};

const mapDispatchToProps = { getNews };

export default connect(mapStateToProps, mapDispatchToProps)(News);
