import React, { useEffect } from "react";
import "./styles.css";
import ProductFacts from "./components/ProductFacts";
import { connect } from "react-redux";
import { fetchProducts } from "./store/actions";

function App({ fetchProducts, loadingProducts, errorMessage }) {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="App">
      <h1>
        Welcome to Report of the Week!
        <span> 📈 </span>
      </h1>
      <h5>
        {" "}
        Where you can easily find ratings for the most anticipated foods from
        your favorite eateries{" "}
      </h5>
      {!loadingProducts ? (
        <ProductFacts />
      ) : (
        <div>... Fetching Product Facts </div>
      )}
      {errorMessage !== "" ? <div> {errorMessage} </div> : null}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingProducts: state.Products,
    errorMessage: state.errorMessage,
  };
}
export default connect(mapStateToProps, { fetchProducts })(App);
