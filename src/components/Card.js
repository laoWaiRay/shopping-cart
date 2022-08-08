import React from 'react'
import { Link } from 'react-router-dom'

const ethereumToUsd = (eth) => {
  const USD = (eth * 1676)
  return USD.toLocaleString()
}

const formatViews = (views) => {
  if (parseInt(views) > 1000) {
    return (views / 1000).toFixed(1) + 'k'
  }
  return views
}

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-info-box'> 
        <span 
          className='card-favourites'
        > 
          {formatViews(props.favourites)} 
          {props.favourited ? 
            <i className="fa-solid fa-heart fa-2xl" style={{color: 'red', WebkitTextStrokeColor: 'red'}} onClick={props.toggleFavourite} data-id-heart={props.id} /> :
            <i className="fa-solid fa-heart fa-2xl" onClick={props.toggleFavourite} data-id-heart={props.id} /> 
          }
        </span>
        <span className='card-views'>{formatViews(props.views)} <i className="fa-solid fa-eye fa-xl" /> </span>
      </div>
      <Link to={`/shopping-cart/view/${props.id}`} >
        <img className='card-img' alt='NFT card' src={props.img} />
      </Link>
      <h2 className='card-number'>{props.artist} #{props.number}</h2>
      <h2 className='card-price'>
        Current Price: {props.price} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(props.price)} USD)
      </h2>
    </div>
  )
}
