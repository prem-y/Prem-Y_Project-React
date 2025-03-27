import React, { useState, useEffect, useMemo } from 'react'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import { increment, decrement} from '../redux/actions/cartItemCountAction'
import { useNavigate } from 'react-router-dom'

import "../styles/Cart.css"
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const counter = useSelector(state => state.cartItemCountReducer);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
    dispatch(increment())
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
      dispatch(decrement())
    }
  };

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    const removedQuantity = updatedCart[index].quantity;
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
    dispatch(decrement(removedQuantity));
  };
  

  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        <h4 style={{textAlign:"center"}}>No items in cart</h4>
      ) : (
        <div className="container-fluid">
          <h2 style={{marginLeft:"30px"}}>Cart Items:</h2>
          <div className="row">
            <div className="col-8">
              <div className="container">
                {cartItems.map((item, index) => 
                  <div className="row m-2">
                    <div className="col-3">
                      <img src={item.imgAddress} alt={item.title} width="200" />
                    </div>
                    <div className="col-5">
                    <h5>{item.title}</h5>
                    <p>Price: ₹{item.price}</p>
                    <div className='qty-button'>
                        <p>Quantity: </p>
                        <div>
                        <button onClick={() => handleDecrease(index)} className='button1'>-</button> 
                        <p>{item.quantity}</p>
                        <button onClick={() => handleIncrease(index)} className='button2'>+</button>
                        </div>
                        <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-4">
              <div className='checkout'>
                <h5>Total{"("+counter.count+" item)"}: ₹{totalPrice}</h5>
                <button onClick={() => navigate('/checkout')}>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart
