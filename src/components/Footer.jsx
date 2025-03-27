import React from 'react'
import "../styles/Footer.css"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div className='footer-container-1'>
      <div className='list'>
        <h5>Get to Know Us</h5>
        <ul>
            <li>
                <NavLink to="/" className="navlink">About Amazon</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Careers</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Press Releases</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Amazon Science</NavLink>
            </li>
        </ul>
      </div>
      <div className='list'>
        <h5>Connect with Us</h5>
        <ul>
            <li>
                <NavLink to="/" className="navlink">Facebook</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Twitter</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Instagram</NavLink>
            </li>
        </ul>
      </div>
      <div className='list'>
        <h4>Make Money with Us</h4>
        <ul>
            <li>
                <NavLink to="/" className="navlink">Sell on Amazon</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Sell under Amazon Accelerator</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Protect and Build Your Brand</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Amazon Global Selling</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Supply to Amazon</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Become an Affiliate</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Fulfilment by Amazon</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Advertise Your Products</NavLink>
            </li>
           
        </ul>
      </div>
      <div className='list'>
        <h4>Let Us Help You</h4>
        <ul>
            <li>
                <NavLink to="/" className="navlink">Your Account</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Returns Centre</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Recalls and Product Safety Alerts</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">100% Purchase Protection</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Amazon App Download</NavLink>
            </li>
            <li>
                <NavLink to="/" className="navlink">Help</NavLink>
            </li>
        </ul>
      </div>
      </div>
      <div className='footer-container-2'>
        <ul>
            <li><NavLink to="/" className="navlink">Conditions of Use & Sale</NavLink></li>
            <li><NavLink to="/" className="navlink">Privacy Notice</NavLink></li>
            <li><NavLink to="/" className="navlink">Interest-Based Ads</NavLink></li>
        </ul>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer
