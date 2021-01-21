import React from 'react';

function Product({ product }) {
    return (
        <div>
            <hr>
            </hr>
            <div> Product: {product.product} </div>
            <div> Manufacturer: {product.manufacturer} </div>
            <div> Rating⭐: {product.rating} </div>
        </div>
    )
}

export default Product;