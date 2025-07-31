import React from 'react'
import './CardStyles.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='drink-card'>
      <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <h3>Price: ${props.price}</h3>
        <p>{props.description}</p>
        <div className="button-container">
            <button className='drink-button'>Order Now</button>
            <button className='drink-button'>Add to Favorites</button>
        </div>
        
    </div>
  )
}

export default Card
