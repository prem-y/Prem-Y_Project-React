import React, {useState, useEffect} from 'react'
import "../styles/ProductDetail.css"
import { useParams, useNavigate } from 'react-router-dom'
import products from "../data/ProductData.json"
import {useDispatch} from "react-redux"
import { increment} from '../redux/actions/cartItemCountAction'

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null); 
  let {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = products.data.find(product => product.id === parseInt(id));
    setProductDetail(foundProduct);
  }, [id])

  function handleAddToCart(){
    if (!productDetail) return;
    const cartItems = JSON.parse(localStorage.getItem("cart")) || []; 
    const newItem = { ...productDetail, quantity }; 
    const existingIndex = cartItems.findIndex(item => item.id === newItem.id);
    if (existingIndex !== -1) {
      cartItems[existingIndex].quantity += quantity;
    } else {
    cartItems.push(newItem);
    }   
    localStorage.setItem("cart", JSON.stringify(cartItems)); 
    dispatch(increment(quantity)); 
  }


  return (
    <div>
      {productDetail ? 
      <div className="product-container">
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='img-container'>
                        <img src={productDetail.imgAddress} className='product-img' alt="" />
                    </div>
                </div>
                <div className='col-6'>
                        <h4>{productDetail.title}</h4>
                        <div className='ratings'>
                          <p>{productDetail.stars+".0"}</p>
                          <img src={`../src/assets/stars/star${productDetail.stars}.png`} alt="img" />
                          <p>{"("+productDetail.rating+")"}</p>
                        </div>
                        <p style={{marginTop:"-16px"}}>{productDetail.buyers}</p>
                        <hr />
                        <div className='price-container'>
                          <p id='discount'>{"-"+productDetail.discount+"%"}</p>
                          <p id='price'>₹{productDetail.price}</p>
                        </div>
                        <div className='mrp'>
                          <p>M.R.P: </p>
                          <p className='mrp-value'>₹{productDetail.mrp}</p>
                        </div> 
                        <div className='qty-container'>
                        <div className='quantity'>
                          <label>Quantity: </label>
                          <div>
                            <button onClick={() => {quantity>1 ? setQuantity(quantity-1):null}}>-</button> 
                            <p>{quantity}</p>
                            <button onClick={() =>setQuantity(quantity+1)}>+</button>
                          </div>
                        </div>
                        <div className='buy-button'>
                            <button className='button1' onClick={handleAddToCart}>Add to cart</button>
                            <button className='button2' onClick={() => navigate('/cart')}>Buy Now</button>
                        </div>
                        </div>
                        <div className='about-container'>
                          <h5>About this item</h5>
                          <ul>
                            {productDetail.description.map((item) => 
                            <li>
                              {item.info}
                            </li>)}
                          </ul>
                        </div>
                </div>
            </div>
        </div>
        </div>
      : 
      <h1 style={{textAlign:"center", marginTop:"10vh"}}>No Product Found!</h1>
      }
    </div>
  )
}

export default ProductDetail;
