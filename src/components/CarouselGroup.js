import React from 'react'
import CarouselItem from './CarouselItem'

export default function CarouselGroup(props) {
  return (
    <div className={'carousel-group'}>
      <CarouselItem featuredImg={props.featuredImgs[0].img} imgs={props.imgs} id={props.ids[0]}/>
      <CarouselItem featuredImg={props.featuredImgs[1].img} imgs={props.imgs} id={props.ids[1]}/>
      <CarouselItem featuredImg={props.featuredImgs[2].img} imgs={props.imgs} id={props.ids[2]}/>
    </div>
  )
}
