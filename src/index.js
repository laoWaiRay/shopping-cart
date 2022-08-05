import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NFTs from './data';

/* Importing images and gifs using require.context because of how webpack works */

function importAll(r) {
  let images = {};
  r.keys().map((item) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images
}
const requiredImgs = require.context('./assets/img', true, /\.png$/);
const images = importAll(requiredImgs);

/* ---------------------------------------------------------------------------- */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {NFTs.map((NFT) => {
      return <img src={images[NFT.img]} alt='lol' key={NFT.id}/>
    })}
  </React.StrictMode>
);