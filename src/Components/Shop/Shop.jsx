import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); 

    useEffect(() => {
        fetch('data/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    const addToCartHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                products.map(product => <Product 
                    product={product} 
                    key={product.id}
                    addToCartHandler={addToCartHandler}
                    ></Product>)
            }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                Selected Item: {cart.length}
            </div>
        </div>
    );
};

export default Shop;