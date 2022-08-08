import React, { useState, useRef } from 'react'
import { NFTs } from '../../data'
import Layout from '../Layout'
import CartItem from '../CartItem';
import BidModal from '../BidModal';
import Flash from '../Flash';
import '../../css/CartPage.css'

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

export default function CartPage(props) {
  const [render, forceRender] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [flashMessage, setFlashMessage] = useState('');
  const [flashColor, setFlashColor] = useState('');
  const [currentNFT, setCurrentNFT] = useState(null);

  const timeoutRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const makeBid = (amount) => {
    currentNFT.bid = amount;
  }

  const triggerFlash = (message, rgb) => {
    clearTimeout(timeoutRef.current)
    setFlashMessage(message)
    setFlashColor(rgb)
    setIsFlashActive(true)
    timeoutRef.current = setTimeout(() => {
      setIsFlashActive(false)
    }, 5000)
  }

  const cartedNFTs = NFTs.filter((NFT) => NFT.inCart === true);
  const activeOfferNFTs = NFTs.filter((NFT) => NFT.bid > 0);

  const displayCartHeading = (numItemsInCart) => {
    let message = ''
    if (cartedNFTs.length === 0) {
      message = 'No items in cart'
    }
    if (cartedNFTs.length === 1) {
      message = '1 item in cart'
    }
    if (cartedNFTs.length > 1) {
      message = numItemsInCart + ' items in cart'
    }

    return <h2 className='cart-page-group-heading'>{message}</h2>
  }

  const displayOffersHeading = (numItemsInOffers) => {
    let message = ''
    if (activeOfferNFTs.length === 0) {
      message = 'No currently active offers'
    }
    if (activeOfferNFTs.length === 1) {
      message = '1 currently active offer'
    }
    if (activeOfferNFTs.length > 1) {
      message = numItemsInOffers + ' currently active offers'
    }

    return <h2 className='cart-page-group-heading'>{message}</h2>
  }

  const removeFromCart = (NFT) => {
    NFT.inCart = false;
    forceRender(!render);
  }

  const removeFromOffers = (NFT) => {
    NFT.bid = 0;
    forceRender(!render);
  }

  return (
    <Layout>
      <div className='cart-page'>
        <div className='cart-page-group cart-items'>
          {displayCartHeading(parseInt(cartedNFTs.length))}

          {cartedNFTs ? 
            cartedNFTs.map((cartedNFT) => {
              return <CartItem 
                key={cartedNFT.id}
                img={images[cartedNFT.img]}
                NFT={cartedNFT}
                isCartItem={true}
                removeFromCart={removeFromCart}
                setCurrentNFT={setCurrentNFT}
                toggleModal={toggleModal}
              />
            })
            :
            null
          }
        </div>

        <div className='cart-page-group made-offers'>
          {displayOffersHeading(parseInt(activeOfferNFTs.length))}
          <div className='made-offers'>
            {activeOfferNFTs ? 
              activeOfferNFTs.map((activeOfferNFT) => {
                return <CartItem 
                  key={activeOfferNFT.id}
                  img={images[activeOfferNFT.img]}
                  NFT={activeOfferNFT}
                  isCartItem={false}
                  removeFromOffers={removeFromOffers}
                  setCurrentNFT={setCurrentNFT}
                  toggleModal={toggleModal}
                />
              })
              :
              null
            }
          </div>
        </div>
        {isFlashActive ?
          <Flash 
            message={flashMessage}
            color={flashColor}
          />
          :
          null
        }
      </div>

      {isModalOpen ? 
        <BidModal
          NFT={currentNFT}
          price={currentNFT.price}
          toggleModal={toggleModal}
          makeBid={makeBid}
          triggerFlash={triggerFlash}
          flashMessage={currentNFT.inCart ? 'Added to active offers!' : 'Successfully updated offer!'}
          removeFromCart={removeFromCart}
          bid={currentNFT.bid}
        />
        :
        null
      }
    </Layout>
  )
}
