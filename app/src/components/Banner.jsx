import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "../styles/Banner.css"
import ImgData from "../data/ImageData.json"

const Banner = () => {
  return (
    <>
        <Carousel 
        autoPlay 
        infiniteLoop 
        showStatus={false} 
        showIndicators={false} 
        interval={6000}
        showThumbs={false}
        showArrows={true}
        stopOnHover
        swipeable
        dynamicHeight={false}
        className='banner'
        >
                {ImgData.data.map((item, index) => (
                <div key={index} className="banner-slide">
                <img src={item.src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
                              
      </Carousel>
    </>
  )
}

export default Banner

{/* <p className="legend">{item.caption}</p> */}
