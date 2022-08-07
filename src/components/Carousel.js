import React, { useEffect, useState } from 'react'
import '../css/Carousel.css'
import { NFTs } from '../data'
import CarouselGroup from './CarouselGroup'

const featuredNFTs = NFTs.filter((NFT) => {
  return NFT.featured === true;
})

export default function Carousel(props) {
  const [screenResized, setScreenResized] = useState(false);

  useEffect(() => {
    const track = document.querySelector('.track');
    const trackWidth = track.getBoundingClientRect().width;
    const carouselGroups = document.querySelectorAll('.carousel-group');
    carouselGroups.forEach((group, index) => {
      group.style.left = `${trackWidth * index}px`;
    })
    carouselGroups[0].classList.add('current-group');
  })

  useEffect(() => {
    function handleResize(e) {
      setScreenResized(!screenResized);
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const moveGroup = (track, currentGroup, targetGroup) => {
    track.style.transform = `translateX(-${targetGroup.style.left})`;
    currentGroup.classList.remove('current-group');
    targetGroup.classList.add('current-group');
  }

  const slideNext = () => {
    const track = document.querySelector('.track');
    const currentGroup = document.querySelector('.current-group');
    const nextGroup = currentGroup.nextElementSibling;
    moveGroup(track, currentGroup, nextGroup);
  }

  const slidePrevious = () => {
    const track = document.querySelector('.track');
    const currentGroup = document.querySelector('.current-group');
    const previousGroup = currentGroup.previousElementSibling;
    moveGroup(track, currentGroup, previousGroup);
  }

  return (
    <div className='carousel'>
      <div className='slider-left' onClick={slidePrevious}>
        <i className="fa-solid fa-chevron-left" />
      </div>
      <div className='window'>
        <div className='track'>
          <CarouselGroup 
            imgs={props.imgs}
            featuredImgs={[featuredNFTs[0], featuredNFTs[1], featuredNFTs[2]]}
            ids={[featuredNFTs[0].id, featuredNFTs[1].id, featuredNFTs[2].id]}
          />
          <CarouselGroup 
            imgs={props.imgs}
            featuredImgs={[featuredNFTs[3], featuredNFTs[4], featuredNFTs[5]]}
            ids={[featuredNFTs[3].id, featuredNFTs[4].id, featuredNFTs[5].id]}
          />
        </div>
      </div>
      <div className='slider-right' onClick={slideNext}>
        <i className="fa-solid fa-chevron-right" />
      </div>
    </div>
  )
}
