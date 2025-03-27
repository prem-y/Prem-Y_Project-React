import React from 'react'
import "../styles/ProductCard.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { increment } from '../redux/actions/cartItemCountAction';
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  function handleAddToCart(){
      if (!product) return;
      const quantity = 1;
      const cartItems = JSON.parse(localStorage.getItem("cart")) || []; 
      const newItem = { ...product, quantity}; 
      const existingIndex = cartItems.findIndex(item => item.id === newItem.id);
      if (existingIndex !== -1) {
        cartItems[existingIndex].quantity += quantity;
      } else {
      cartItems.push(newItem);
      }   
      localStorage.setItem("cart", JSON.stringify(cartItems)); 
      dispatch(increment(quantity)); 
    }
  const navigate = useNavigate();
  return (
    <div className='card'>
      <div className='img-container' onClick={() => navigate(`/details/${product.id}`)}>
        <img src={product.imgAddress} className='card-img-top img-flow' alt="" />
      </div>
      <div className='card-body'>
        <h5 className='card-title' onClick={() => navigate(`/details/${product.id}`)}>
          {product.title}
        </h5>
        <div className='rating-component' onClick={() => navigate(`/details/${product.id}`)}>
          <img src={`../src/assets/stars/star${product.stars}.png`} alt="" />
          <p>{product.rating}</p>
        </div>
        <p style={{marginTop:"-20px"}}>{product.buyers}</p>
        <div className='pricing' onClick={() => navigate(`/details/${product.id}`)}>
          <p style={{fontSize:"25px"}}>₹{product.price}</p>
          <div onClick={() => navigate(`/details/${product.id}`)}>
          <p>M.R.P: </p>
          <p style={{fontSize:"14px", textDecoration:"line-through"}}>₹{product.mrp}</p>
          <p style={{marginLeft:"5px"}}><strong>{"(" + product.discount +"% off)"}</strong></p>
          </div>
        </div>
        <button className='addToCartButton' onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  )
}

export default React.memo(ProductCard)
