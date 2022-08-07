import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { NFTs } from '../../data'
import Layout from '../Layout';
import '../../css/ViewPage.css'

/* Importing images and gifs using require.context because of how webpack works */

function importAll(r) {
  let images = {};
  r.keys().map((item) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images
}
const requiredImgs = require.context('../../assets/img', true, /\.png$/);
const images = importAll(requiredImgs);

/* ---------------------------------------------------------------------------- */

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

export default function ViewPage() {
  const [render, forceRender] = useState(false);

  let { id } = useParams();
  const NFT = NFTs.find((NFT) => NFT.id === id);

  const toggleFavourite = () => {
    NFT.favourited = !NFT.favourited;
    forceRender(!render)
  }

  return (
    <Layout>
      <div className='view-page'>
        <div className='grid'> 
          <div className='nft-image-container'>
            <div className='nft-image-wrapper'>
              <img className='nft-image' alt='nft' src={images[NFT.img]} />
            </div>
          </div>

          <div className='nft-panel'>
            <div className='nft-panel-info'>
              <h2 className='nft-artist'>{NFT.artist}</h2>
              <h2 className='nft-number'>#{NFT.number}</h2>
              <div className='nft-info'>
                <span className='nft-info-item'>
                  Owned by <span className='nft-owner'> {NFT.owner} </span>
                </span>
                <span className='nft-info-item'>{formatViews(NFT.views)} <i className="fa-solid fa-eye fa-xl" /></span>   
                <span className='nft-info-item'>{formatViews(NFT.favourites)}
                  {NFT.favourited ? 
                  <i className="fa-solid fa-heart fa-2xl" style={{color: 'red', WebkitTextStrokeColor: 'red'}} onClick={toggleFavourite} data-id-heart={NFT.id}/> : 
                  <i className="fa-solid fa-heart fa-2xl" onClick={toggleFavourite} data-id-heart={NFT.id}/>}
                </span>
              </div>
            </div>
            <div className='nft-panel-pricing'>
              <h2 className='pricing-heading'>Current Price</h2>
              <div className='price-box'>{NFT.price} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(NFT.price)} USD)</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
