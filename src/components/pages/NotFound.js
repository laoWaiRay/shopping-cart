import React from 'react'
import Layout from '../Layout'
import '../../css/NotFound.css'
import { Link } from 'react-router-dom' 

export default function NotFound() {
  return (
    <Layout>
      <div className='not-found-page'>
        <div className='not-found-msg'>
          Sorry, the page you were looking for does not exist
          <Link className='btn-link-wrapper' to='/shopping-cart'>
            <button className='navigate-home-btn'>Back to Home</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
