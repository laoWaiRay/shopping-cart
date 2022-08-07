import React, { useState } from 'react'
import Layout from '../Layout'
import Selector from '../Selector'
import '../../css/ShopPage.css'
import { NFTs } from '../../data'
import Card from '../Card'

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
console.dir(NFTs)

export default function ShopPage() {
  const [displayedNFTs, setDisplayedNFTs] = useState(NFTs)

  const showAll = () => {
    setDisplayedNFTs([...NFTs]);
  }

  const sortByLowestPrice = () => {
    const sortedArray = [...NFTs];
    sortedArray.sort((a,b) => {
      return a.price - b.price
    })
    setDisplayedNFTs(sortedArray);
  }

  const sortByHighestPrice = () => {
    const sortedArray = [...NFTs];
    sortedArray.sort((a,b) => {
      return b.price - a.price
    })
    setDisplayedNFTs(sortedArray);
  }

  const sortByMostViews = () => {
    const sortedArray = [...NFTs];
    sortedArray.sort((a,b) => {
      return b.views - a.views
    })
    setDisplayedNFTs(sortedArray)
  }

  const sortByMostFavourites = () => {
    const sortedArray = [...NFTs];
    sortedArray.sort((a,b) => {
      return b.favourites - a.favourites
    })
    setDisplayedNFTs(sortedArray)
  }

  return (
    <Layout>
      <div className='shop-page'>
        <h2 className=' shop-page-heading'>All NFTs</h2>
        <div className='filter-togglers'>
          <button className='toggle-filters-btn'> <i className="fa-solid fa-sliders"></i> All Filters </button>
          <Selector 
            showAll={showAll}
            sortByLowestPrice={sortByLowestPrice}
            sortByHighestPrice={sortByHighestPrice}
            sortByMostViews={sortByMostViews}
            sortByMostFavourites={sortByMostFavourites}
          />
        </div>
        <div className='grid'>
          {
            displayedNFTs.map((NFT) => {
              return <Card 
                key={NFT.id}
                img={images[NFT.img]}
                number={NFT.number}
                price={NFT.price}
                artist={NFT.artist}
                views={NFT.views}
                favourites={NFT.favourites}
              />
            })
          }
        </div>
      </div>
    </Layout>
  )
}
