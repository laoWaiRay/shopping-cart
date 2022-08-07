import React, { useEffect } from 'react'

export default function Sidebar(props) {
  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    if (props.isOpen) {
      sidebar.style.left = '0px';
    } else {
      sidebar.style.left = '-25vw'
    }
  },[props.isOpen])

  return (
    <div className='sidebar'>
      <h2 className='sidebar-heading-main'>
        Filters
        <button className='sidebar-close-btn' onClick={props.toggleSidebar}>x</button>
      </h2>

      <div className='sidebar-artist-options'>
        <h2 className='sidebar-heading'>Artist</h2>
        <div className='sidebar-group'>
          <div className='artist-group'>
            <input className='checkbox' type='checkbox' id='bayc' onChange={(e) => {props.toggleArtist(e, 'Bored Ape Yacht Club')}}/>
            <label htmlFor='bayc'>Bored Apes Yacht Club</label>
          </div>
          <div className='artist-group'>
            <input className='checkbox' type='checkbox' id='cryptopunks' onChange={(e) => {props.toggleArtist(e, 'Cryptopunks')}}/>
            <label htmlFor='cryptopunks'>Cryptopunks</label>
          </div>
          <div className='artist-group'>
            <input className='checkbox' type='checkbox' id='doodles' onChange={(e) => {props.toggleArtist(e, 'Doodles')}}/>
            <label htmlFor='doodles'>Doodles</label>
          </div>
          <div className='artist-group'>
            <input className='checkbox' type='checkbox' id='moonbirds' onChange={(e) => {props.toggleArtist(e, 'Moonbirds')}}/>
            <label htmlFor='moonbirds'>Moonbirds</label>
          </div>
        </div>
      </div>

      <div className='sidebar-price-options'>
        <h2 className='sidebar-heading'>Price (<i className="fa-brands fa-ethereum" />)</h2>
          <div className='sidebar-group'>
            <div className='price-group'>
              <input className='checkbox' type='checkbox' id='price-0-10' onChange={(e) => {props.togglePrice(e, 0, 10)}}/>
              <label htmlFor='price-0-10'>0-10</label>
            </div>
            <div className='price-group'>
              <input className='checkbox' type='checkbox' id='price-10-50' onChange={(e) => {props.togglePrice(e, 10, 50)}}/>
              <label htmlFor='price-10-50'>10-50</label>
            </div>
            <div className='price-group'>
              <input className='checkbox' type='checkbox' id='price-50-plus' onChange={(e) => {props.togglePrice(e, 50, 1000000)}}/>
              <label htmlFor='price-50-plus'>50+</label>
            </div>
          </div>
      </div>
    </div>
  )
}
