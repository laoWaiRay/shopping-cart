import React from 'react'
import '../css/Flash.css'

export default function Flash(props) {
  return (
    <div className='flash-message' style={{background: `${props.color}`}}>
      <span className='flash-message-inner'>{props.message}</span>
    </div>
  )
}
