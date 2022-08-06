import React from 'react'
import Layout from '../Layout'
import '../../css/NotFound.css'
import { NavLink } from 'react-router-dom' 

export default function NotFound() {
  return (
    <Layout>
      <div className='not-found-page'>
        <div className='not-found-msg'>
          Sorry, the page you were looking for does not exist
          <NavLink className='btn-link-wrapper' to='/'>
            <button className='navigate-home-btn'>Back to Home</button>
          </NavLink>
        </div>
      </div>
    </Layout>
  )
}
