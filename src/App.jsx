import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import DrinkCards from './components/drinkCards.jsx'
import SmoothieGraphic from './components/SmoothieGraphic.jsx'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
      <Nav />
      <Hero />
      <DrinkCards />
      <SmoothieGraphic />
      <Menu/>
      <Footer />
      </div>
    </>
  )
}

export default App
