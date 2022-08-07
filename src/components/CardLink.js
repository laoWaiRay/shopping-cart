import React from 'react'
import { Link } from 'react-router-dom'

export default function CardLink(props) {
  return (
    <Link to='/shop' state={{filter: props.filter}}>
      <div className='card-link'>
        <div className='card-link-img-wrapper'>
        <img className='card-link-img' src={props.img} alt='NFT' />
        </div>
      <div className='card-link-artist'>{props.artist}</div>
      </div>
    </Link>
  )
}
