import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <div className="product-top">
                <div className="product-thumb">
                    <img src={img} alt="" />
                </div>
                <div className="product-info">
                    <h2 className='product-name'>{name}</h2>
                    <h3 className='product-price'>Price: ${price}</h3>
                </div>
            </div>
            <div>
                <div className="product-details">
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Star</p>
                </div>
                <div className="add-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;