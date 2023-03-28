import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;