import React from 'react'

const ethereumToUsd = (eth) => {
  const USD = (eth * 1676)
  return USD.toLocaleString()
}

const formatViews = (views) => {
  if (parseInt(views) > 1000) {
    return (views / 1000) + 'k'
  }
  return views
}


export default function Card(props) {
  return (
    <div className='card'>
      <div className='card-info-box'> 
        <span className='card-favourites'>{formatViews(props.favourites)} <i className="fa-solid fa-heart fa-2xl" /> </span>
        <span className='card-views'>{formatViews(props.views)} <i className="fa-solid fa-eye fa-xl" /> </span>
      </div>
      <img className='card-img' alt='NFT card' src={props.img} />
      <h2 className='card-number'>{props.artist} #{props.number}</h2>
      <h2 className='card-price'>
        Current Price: {props.price} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(props.price)} USD)
      </h2>
    </div>
  )
}