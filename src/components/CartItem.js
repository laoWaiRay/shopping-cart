import React from 'react'
import { Link } from 'react-router-dom' 

const ethereumToUsd = (eth) => {
  const USD = (eth * 1676)
  return USD.toLocaleString()
}

export default function CartItem(props) {
  const NFT = props.NFT;
  return (
    <div className='cart-item'>
      <Link to={`/view/${NFT.id}`}>
        <img className='cart-item-img' src={props.img} alt='nft' />
      </Link>
      <div className='cart-item-info'>
        <h2 className='nft-artist'>{NFT.artist}</h2>
        <h3 className='nft-number'>#{NFT.number}</h3>
        {props.isCartItem ? 
          <button className='remove-from-cart-btn' onClick={() => {props.removeFromCart(NFT)}}>Remove</button>
          :
          <button className='remove-from-offers-btn' onClick={() => {props.removeFromOffers(NFT)}}>Remove</button>
        }
      </div>
      <div className='cart-item-stats'>
        <div className='last-purchased-price'>Last sold for: {NFT.price} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(NFT.price)} USD)</div>
        <div className='your-offer'>Your offer: {NFT.bid} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(NFT.bid)} USD)</div>
        {props.isCartItem ? 
          <button className='make-bid-btn' onClick={() => {
            props.setCurrentNFT(NFT)
            props.toggleModal()
          }}>Make Offer</button>
          :
          <button className='edit-bid-btn' onClick={() => {
            props.setCurrentNFT(NFT)
            props.toggleModal()
          }}>Edit Offer</button>
        }
      </div>
    </div>
  )
}
