import React from 'react';

const Product = (props) => {
    console.log(props.product)
    return (
        <div>
            <h2>{props.product.name}</h2>
        </div>
    );
};

export default Product;