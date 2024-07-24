import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-frame'>
      <Link className='linker' to='/step1'>
      <div className='home-button'>
        <span>RESGATAR COM </span>
        <img className='logo-bb-btn' src="https://cdn.freebiesupply.com/logos/large/2x/banco-do-brasil-01-logo-png-transparent.png" alt="logo-bb" />
      </div>
      </Link>
      <div className='publi-organize'>
        <img src="https://i.imgur.com/i5maoBG.png" alt="image1" />
        <img className='distanciamento-publi' src="https://i.imgur.com/zWuvjuj.png" alt="image2" />
      </div>
      <div className='distancia-publi-btn'></div>
    </div>
  )
}

export default Home