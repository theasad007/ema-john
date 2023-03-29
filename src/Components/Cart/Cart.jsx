import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    
    for (const item of cart) {
        total = total + item.price;
        shipping = shipping + item.shipping;
    }
    const totalWithoutTax = total + shipping;
    const tax = 5;
    const taxAmount = totalWithoutTax * tax / 100
    const grandTotal = totalWithoutTax + taxAmount;



    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <div className="cart-details">
                <p><b>Selected Item:</b> {cart.length}</p>
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