import React, { useState } from 'react'
import Layout from '../Layout'
import Selector from '../Selector'
import '../../css/ShopPage.css'
import { NFTs } from '../../data'

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

export default function ShopPage() {

  return (
    <Layout>
      <div className='shop-page'>
        <h2 className=' shop-page-heading'>All NFTs</h2>
        <div className='filter-togglers'>
          <button className='toggle-filters-btn'> <i class="fa-solid fa-sliders"></i> All Filters </button>
          <Selector />
        </div>
        <div className='grid'>
          {
            NFTs.map((NFT) => {
              return <img className='grid-img' key={NFT.id} alt='NFT' src={images[NFT.img]}></img>
            })
          }
        </div>
      </div>
    </Layout>
  )
}
