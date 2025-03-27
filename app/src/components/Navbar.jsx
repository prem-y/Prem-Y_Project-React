import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../styles/Navbar.css"
import {useSelector} from "react-redux"

const Navbar = () => {
  const counter = useSelector(state => state.cartItemCountReducer);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/result?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header>
        <nav>
            {/* <NavLink className="logo" href='/'>Amazon.in</NavLink> */}
            <NavLink className="logo" href='/'>
              <img src="../src/assets/amazon-logo.png" alt="" height="40px"/>
            </NavLink>
            <div className='search-bar'>
            <input 
            type="text" 
            placeholder="Search Amazon.in" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
              <button onClick={handleSearch}>Search</button>
            </div>
            <ul>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Home</NavLink></li>
              <li><NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Login</NavLink></li>
              <li><NavLink to="/Cart" className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Cart{"("+counter.count+")"}</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
