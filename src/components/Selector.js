import React, { useState, useEffect } from 'react'

export default function Selector(props) {
  const [selectedValue, setSelectedValue] = useState('Sort by...');
  const [isOpen, setIsOpen] = useState({value: false});

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => {
      return {value: !isOpen.value}
    })
  }

  const sortByRelevancy = () => {
    toggleIsOpen();
    setSelectedValue('Relevancy');
    props.showAll();
  }

  const sortByLowestPrice = () => {
    toggleIsOpen();
    setSelectedValue('Lowest Price');
    props.sortByLowestPrice();
  }

  const sortByHighestPrice = () => {
    toggleIsOpen();
    setSelectedValue('Highest Price');
    props.sortByHighestPrice();
  }

  const sortByMostViews = () => {
    toggleIsOpen();
    setSelectedValue('Most Views');
    props.sortByMostViews();
  }

  const sortByMostFavourites = () => {
    toggleIsOpen();
    setSelectedValue('Most Favourites');
    props.sortByMostFavourites();
  }

  useEffect(() => {
    const trigger = document.querySelector('.selector-trigger');
    if (selectedValue === 'Sort by...') {
      trigger.innerText = selectedValue;
    } else {
      trigger.innerText = `Sort by: ${selectedValue}`;
    }
  }, [selectedValue])

  return (
    <div className='selector'>
      <div className='selector-wrapper'>
        <div className='selector-trigger' onClick={toggleIsOpen}></div>
        {isOpen.value === true ? 
          <div className='selector-options'>
            <div className='selector-option' onClick={sortByRelevancy}>Relevancy</div>
            <div className='selector-option' onClick={sortByLowestPrice}>Lowest Price</div>
            <div className='selector-option' onClick={sortByHighestPrice}>Highest Price</div>
            <div className='selector-option' onClick={sortByMostViews}>Most Views</div>
            <div className='selector-option' onClick={sortByMostFavourites}>Most Favourites</div>
          </div>
          : null
        }
        <i className="fa-solid fa-caret-down" />
      </div>
    </div>
  )
}
