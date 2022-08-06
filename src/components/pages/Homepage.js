import React from 'react'
import { NFTs, NFTImages } from '../../data';
import Layout from '../Layout';
import '../../css/Homepage.css'
import CardLink from '../CardLink';
import Carousel from '../Carousel';
import { NavLink } from 'react-router-dom';

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

export default function Homepage() {
  return (
    <Layout>
    <div className='homepage'>
      <div className='artist-links-container'>
        <h2 className='artist-links-heading'>Shop by Artist</h2>
        <div className='artist-links'>
          <CardLink 
            artist='Bored Apes YC'
            img={images[NFTImages.bayc]}
          />
          <CardLink 
            artist='Cryptopunks'
            img={images[NFTImages.cryptopunks]}
          />
          <CardLink 
            artist='Doodles'
            img={images[NFTImages.doodles]}
          />
          <CardLink 
            artist='Moonbirds'
            img={images[NFTImages.moonbirds]}
          />
        </div>
      </div>

      <div className='trending-container'>
        <h2 className='trending-heading'>Trending</h2>
        <Carousel imgs={images}/>
      </div>
      
      <NavLink className='navigate-to-shop-btn-wrapper' to='/'>
        <button className='navigate-to-shop-btn'>View All</button>
      </NavLink>
    </div>
    </Layout>
  )
}

