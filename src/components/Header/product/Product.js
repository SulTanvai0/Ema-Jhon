import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product, handelAddToCart}) => {
    
    const { name, price, ratings, img, seller} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
           </div>
           <button onClick={ ()=> handelAddToCart(product)} className='btn-cart'>
            <p>Add To Cart  &nbsp; &nbsp; <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon></p>
            
           </button>
        </div>
    );
};

export default Product;
 