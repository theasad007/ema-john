import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import Product from '../Product/Product';

const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for (const product of cart) {
        // Instead this code We write code on handleAddToCart()
        // if(product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1; // Shortcut
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const totalWithoutTax = total + shipping;
    const tax = 5;
    const taxAmount = totalWithoutTax * tax / 100
    const grandTotal = totalWithoutTax + taxAmount;



    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <div className="cart-details">
                <p><b>Selected Item:</b> {quantity}</p>
                <p><b>Total Price:</b> ${total}</p>
                <p><b>Total Shipping Charge:</b> ${shipping}</p>
                <p><b>Tax:</b> ${taxAmount.toFixed(2)}</p>
                <h4><b>Grand Total:</b> ${grandTotal.toFixed(2)}</h4>
            </div>
            <div className="cart-btn">
                <button className='clear-cart-btn'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <button className='checkout-btn'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
            </div>
        </div>
    );
};

export default Cart;