import React from 'react'
import './heroStyles.css'
import smoothieImage from '../assets/smoothie.jpg' // Assuming you have an image in this path

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-image">
        <img src={smoothieImage} alt="A picture of an assortment of smoothies." />
      </div>
    </div>
  )
}

export default Hero
