import React from 'react'
import { Link } from 'react-router-dom';

export default function CarouselItem(props) {
  return (
    <div className='carousel-item'>
      <Link to={`/shopping-cart/view/${props.id}`}>
        <img className='carousel-img' src={props.imgs[props.featuredImg]} alt='NFT' />
      </Link>
    </div>
  )
}
