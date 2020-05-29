import React from "react";
import { connect } from "react-redux";
import CatsList from "./CatsList";
import Carousel from "./Carousel";
import { getData } from "../actions";

import { Spinner } from "reactstrap";

const CatForm = (props) => {
  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <div
        style={{
          marginTop: "3rem",
          width: "650px",
          height: "490px",
          display: "flex",
          alignItems: "center",

          margin: "0 auto",
        }}
      >
        <Carousel />
      </div>
      {!props.breeds.length && (
        <div
          style={{ margin: "1rem auto", display: "flex", alignItems: "center" }}
        >
          {props.isFetchingData ? (
            <div style={{ margin: "0 auto" }}>
              <Spinner
                color="primary"
                style={{ width: "3rem", height: "3rem" }}
              />{" "}
            </div>
          ) : (
            <div
              onClick={handleGetData}
              style={{
                margin: "0 auto",
                cursor: "pointer",
                color: "#7BA9D5",
                fontSize: "1.5rem",
              }}
            >
              {`Get Breeds `}
              <img
                alt="cat footprint"
                style={{ marginLeft: "1rem", fontSize: "3rem" }}
                src="https://img.icons8.com/ultraviolet/40/000000/cat-footprint.png"
              />
            </div>
          )}
        </div>
      )}
      <CatsList
        searchTerm={props.searchTerm}
        setSearchToggle={props.setSearchToggle}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
    breeds: state.breeds,
  };
};

export default connect(mapStateToProps, { getData })(CatForm);
