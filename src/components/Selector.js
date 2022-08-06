import React, { useState, useEffect } from 'react'

export default function Selector() {
  const [selectedValue, setSelectedValue] = useState('Sort by...');
  const [isOpen, setIsOpen] = useState({value: false});

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => {
      return {value: !isOpen.value}
    })
  }

  const changeValue = (newValue) => {
    toggleIsOpen();
    setSelectedValue(newValue);
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
            <div className='selector-option' onClick={() => {changeValue('Relevancy')}}>Relevancy</div>
            <div className='selector-option' onClick={() => {changeValue('Lowest Price')}}>Lowest Price</div>
            <div className='selector-option' onClick={() => {changeValue('Highest Price')}}>Highest Price</div>
            <div className='selector-option' onClick={() => {changeValue('Most Views')}}>Most Views</div>
            <div className='selector-option' onClick={() => {changeValue('Most Favourites')}}>Most Favourites</div>
          </div>
          : null
        }
        <i className="fa-solid fa-caret-down" />
      </div>
    </div>
  )
}
