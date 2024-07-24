import React from 'react'
import './PageThree.css'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import CameraComponent from '../components/CameraComponent'

const PageThree = () => {
  return (
    <div className='page3-frame'>
      <Navbar />
      <CameraComponent />
    </div>
  )
}

export default PageThree