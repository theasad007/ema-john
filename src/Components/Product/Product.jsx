import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    // console.log(props)

    const { img, name, price, seller, ratings } = props.product;
    const {addToCartHandler, product} = props;
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
                    <button onClick={() => addToCartHandler(product)}>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;