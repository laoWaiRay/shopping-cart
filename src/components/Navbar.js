import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/shopping-cart'>
        <h1 className='navbar-logo'><span className='NFT'>NFT</span> Marketplace</h1>
      </Link>
      <ul className='navbar-nav'>
        <NavLink to='/shopping-cart/' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Home</li>
        </NavLink>
        <NavLink to='/shopping-cart/shop' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Shop</li>
        </NavLink>
        <NavLink to='/shopping-cart/cart' className='navbar-nav-item'>
          <li className='navbar-nav-link' >Cart</li>
        </NavLink>
      </ul>
    </div>
  )
}
