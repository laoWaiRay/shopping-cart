import React, { useState } from 'react'
import Layout from '../Layout'
import Selector from '../Selector'
import '../../css/ShopPage.css'
import { NFTs } from '../../data'
import Card from '../Card'
import Sidebar from '../Sidebar'

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
  const [isOpen, setIsOpen] = useState(false);
  const [artistFiltersActive, setArtistFiltersActive] = useState(false);
  const [priceFiltersActive, setPriceFiltersActive] = useState(false);
  const [displayedNFTsBeforePriceFilterActive, setDisplayedNFTsBeforePriceFilterActive] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const showAll = () => {
    setDisplayedNFTs((current) => {
      return [...NFTs]
    });
  }

  const sortByLowestPrice = () => {
    setDisplayedNFTs((current) => {
      const sortedArray = [...current];
      sortedArray.sort((a,b) => {
        return a.price - b.price
      })
      return sortedArray
    });
  }

  const sortByHighestPrice = () => {
    setDisplayedNFTs((current) => {
      const sortedArray = [...current];
      sortedArray.sort((a,b) => {
        return b.price - a.price
      })
      return sortedArray
    });
  }

  const sortByMostViews = () => {
    setDisplayedNFTs((current) => {
      const sortedArray = [...current];
      sortedArray.sort((a,b) => {
        return b.views - a.views
      })
      return sortedArray
    })
  }

  const sortByMostFavourites = () => {
    setDisplayedNFTs((current) => {
      const sortedArray = [...current];
      sortedArray.sort((a,b) => {
        return b.favourites - a.favourites
      })
      return sortedArray
    })
  }

  const toggleArtist = (e, artist) => {
    let artistNFTs = [...NFTs];
    artistNFTs = artistNFTs.filter((NFT) => NFT.artist === artist)

    if (artistFiltersActive) {
      if (e.target.checked) {
        setDisplayedNFTs((currentNFTs) => {
          return [...artistNFTs, ...currentNFTs]
        });
        setArtistFiltersActive(true);
      } else {
        setDisplayedNFTs((currentNFTs) => {
          const newNFTs = currentNFTs.filter((NFT) => NFT.artist !== artist)
          if (newNFTs.length === 0) {
            setArtistFiltersActive(false);
            return [...NFTs]
          } else {
            return [...newNFTs]
          }
        })
      }
    } else {
      if (e.target.checked) {
        setDisplayedNFTs([...artistNFTs])
        setArtistFiltersActive(true)
      } 
    }
  }

  const togglePrice = (e, minPrice, maxPrice) => {
    if (priceFiltersActive) {
      if (e.target.checked) {
        setDisplayedNFTsBeforePriceFilterActive([...displayedNFTs]);
        setDisplayedNFTs((currentNFTs) => {
          let priceNFTs = [...currentNFTs];
          priceNFTs = priceNFTs.filter((NFT) => (NFT.price >= minPrice && NFT.price <= maxPrice))
          return [...priceNFTs, ...currentNFTs]
        });
        setPriceFiltersActive(true);
      } else {
        setDisplayedNFTs((currentNFTs) => {
          let priceNFTs = [...currentNFTs];
          priceNFTs = priceNFTs.filter((NFT) => !(NFT.price >= minPrice && NFT.price <= maxPrice))
          if (priceNFTs.length === 0) {
            setPriceFiltersActive(false);
            return [...displayedNFTsBeforePriceFilterActive]
          } else {
            return [...priceNFTs]
          }
        })
      }
    } else {
      if (e.target.checked) {
        setDisplayedNFTsBeforePriceFilterActive([...displayedNFTs]);
        setDisplayedNFTs((currentNFTs) => {
          let priceNFTs = [...currentNFTs];
          priceNFTs = priceNFTs.filter((NFT) => (NFT.price >= minPrice && NFT.price <= maxPrice))
          return [...priceNFTs]
        })
        setPriceFiltersActive(true)
      } 
    }
  }

  const toggleFavourite = (e) => {
    const id = (e.target.dataset.idHeart);
    const NFT = NFTs.find((NFT) => NFT.id === id);
    NFT.favourited = !NFT.favourited;
    setTriggerRender(!triggerRender)
  }

  return (
    <Layout>
      <div className='shop-page'>
        <h2 className=' shop-page-heading'>All NFTs</h2>
        <div className='filter-togglers'>
          <button className='toggle-filters-btn' onClick={toggleSidebar}> <i className="fa-solid fa-sliders"></i> All Filters </button>
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
                favourited={NFT.favourited}
                id={NFT.id}
                toggleFavourite={toggleFavourite}
              />
            })
          }
        </div>
          <Sidebar 
            toggleSidebar={toggleSidebar}
            isOpen={isOpen ? true : false}
            toggleArtist={toggleArtist}
            togglePrice={togglePrice}
          />
      </div>
    </Layout>
  )
}
