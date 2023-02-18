import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart , children }) => {

    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((price * 0.1).toFixed(2));
    const grandTotal = price + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item : {quantity}</p>
            <p>Total price:${price} </p>
            <p>Total Shipping:${shipping} </p>
            <p>Tax:${tax} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>

            {children}

            <div className='delete-container'>
                <button className='btn-all-clear' onClick={clearCart} >
                    <p> Clear Cart</p>
                    <FontAwesomeIcon className='Delete-all-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;