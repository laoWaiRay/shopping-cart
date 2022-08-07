import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>
        <h1 className='navbar-logo'>NFT Marketplace</h1>
      </Link>
      <ul className='navbar-nav'>
        <NavLink to='/' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Home</li>
        </NavLink>
        <NavLink to='/shop' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Shop</li>
        </NavLink>
        <NavLink to='/potatoes' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Cart</li>
        </NavLink>
      </ul>
    </div>
  )
}
