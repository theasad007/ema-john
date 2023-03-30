import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // 01 Get Id of Added Product
        for (const id in storedCart) {
            // 02 Get Product from products by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                // 03 Add Quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            // console.log('ali', addedProduct)
        }
        setCart(savedCart);


    }, [products])

    const addToCartHandler = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        // if product does not exsist in the cart, set quantity 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;