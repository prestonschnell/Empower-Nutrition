import React from 'react'
import './MenuStyles.css'
import Card from './Card'

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className="drink-menu-grid">
        <Card img="" name="Drink 1" price="4.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 2" price="7.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 3" price="7.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 4" price="9.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 5" price="5.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 6" price="8.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 7" price="6.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 8" price="10.99" description="Here is a short description of the ingredients of the drink." />
        <Card img="" name="Drink 9" price="3.99" description="Here is a short description of the ingredients of the drink." />
      </div>
    </div>
  )
}

export default Menu
