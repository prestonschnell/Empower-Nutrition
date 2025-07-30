import React from 'react'
import './drinkCardsStyles.css'
import Card from './Card'

const DrinkCards = () => {
  return (
    <div className='drink-cards-container'>
      <div className="drink-cards-grid">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default DrinkCards


/* We need a container for our grid to land. */
/* We also need to create our card template which contains an image, name of each drink, and a short description of the ingredients. */
