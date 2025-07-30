import React from 'react'
import './CardStyles.css'
import red from '../assets/red.jpg'

const Card = () => {
  return (
    <div className='drink-card'>
      <img src={red} alt="" />
        <h2>Drink Name</h2>
        <h3>Price: $5.00</h3>
        <p>Description of the drink goes here. It can include ingredients, taste profile, and any other relevant information.</p>
        <div className="button-container">
            <button className='drink-button'>Order Now</button>
            <button className='drink-button'>Add to Favorites</button>
        </div>
        
    </div>
  )
}

export default Card
