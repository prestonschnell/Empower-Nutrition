import React from 'react'
import './drinkCardsStyles.css'
import Card from './Card'
import red from '../assets/red.jpg'
import cake from '../assets/cake.jpg'
import cookie from '../assets/cookie.jpg'
import frappe from '../assets/frappe.jpg'

const DrinkCards = () => {
  return (
    <div className='drink-cards-container'>
      <div className="drink-cards-grid">
        <Card img={red} name="Drink 1" price="4.99" description="Here is a short description of the ingredients of the drink." />
        <Card img={cake} name="Drink 2" price="7.99" description="Here is a short description of the ingredients of the drink." />
        <Card img={cookie} name="Drink 3" price="7.99" description="Here is a short description of the ingredients of the drink." />
        <Card img={frappe} name="Drink 4" price="9.99" description="Here is a short description of the ingredients of the drink." />
      </div>
    </div>
  )
}

export default DrinkCards


/* We need a container for our grid to land. */
/* We also need to create our card template which contains an image, name of each drink, and a short description of the ingredients. */
