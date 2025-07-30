import React from 'react'
import './navStyles.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div id='nav-title-container'>
        <h1 className='nav-title'><a href="#home">Empower App</a></h1>
      </div>
      <div id='nav-links-container'>
        <ul className='nav-links'>
          <li className='nav-link-item'><a href='#home'>Home</a></li>
          <li className='nav-link-item'><a href='#about'>About</a></li>
          <li className='nav-link-item'><a href='#services'>Services</a></li>
          <li className='nav-link-item'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
