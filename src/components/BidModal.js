import React, { useState, useRef } from 'react'

const ethereumToUsd = (eth) => {
  const USD = (eth * 1676)
  return USD.toLocaleString()
}

export default function BidModal(props) {
  const [value, setValue] = useState(0);
  const timerRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.value > 9999) return
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const increment = () => {
    setValue((value) => {
      if (value === 9999) return 9999
      return parseInt(value + 1)
    })
  } 

  const decrement = () => {
    setValue((value) => {
      if(value === 0) return 0
      return parseInt(value - 1)
    })
  }
  
  const startTimer = (e, callback) => {
    callback()
    timerRef.current = setInterval(callback, 100);
  }

  const stopTimer = (e) => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  const getCurrencyInput = () => {
    let style = {};
    // if (value.length === 0 ) {
    //   style = {display: 'none'}
    // }
    if (value < 10) {
      style = {right: '18.5rem'}
      console.log('hap path 1')
    }
    if (value >= 10) {
      style = {right: '17.5rem'}
      console.log('hap path 2')
    }
    if (value >= 100) {
      style = {right: '16.5rem'}
    }
    if (value >= 1000) {
      style = {right: '15.5rem'}
    }
  
    return <i className="fa-brands fa-ethereum input-currency" style={style} />
  }

  return (
    <div className='bid-modal'>
      <div className='bid-modal-inner'>
        <button className='modal-close-btn' onClick={props.toggleModal}>x</button>
        <div className='last-sold-price'>
          Last sold price: 
          <span className='last-sold-price-number'>
            {props.price} <i className="fa-brands fa-ethereum" /> ({ethereumToUsd(props.price)} USD)
          </span>
        </div>
        <form>  
          <div className='form-group'>
            <label className='bid-amount-label' htmlFor='bidAmount'>Your offer: </label>
            <div className='input-wrapper'>
              <input 
                className='bid-amount-input' 
                type={'number'} 
                placeholder='Enter an amount'
                onChange={handleChange}
                value={value}
              />
              { getCurrencyInput() }
              

              <div className='number-controls'>
                <button 
                  className='increment'
                  onMouseDown={(e) => startTimer(e, increment)}
                  onMouseUp={(e) => stopTimer(e)}
                  type='button'
                >
                  <i className="fa-solid fa-angle-up increment-icon" />
                </button>
                <button 
                  className='decrement'
                  onMouseDown={(e) => startTimer(e, decrement)}
                  onMouseUp={(e) => stopTimer(e)}
                  type='button'
                >
                  <i className="fa-solid fa-angle-up decrement-icon" />
                </button>
              </div> 
            </div>
          </div>
          <button className='submit-bid-btn' onClick={handleSubmit}>Make Offer</button>
          <button className='cancel-bid-btn' onClick={props.toggleModal}>Cancel</button>
        </form>
      </div>
    </div>
  )
}
