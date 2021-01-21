import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

function ProductFacts(props) {
    return (
        <>

            <section>
                {props.products.map((product) => {
                    return <Product key={product._id} product={product}

                    />;

                })}
            </section>
        </>
    );
}

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, {})(ProductFacts);