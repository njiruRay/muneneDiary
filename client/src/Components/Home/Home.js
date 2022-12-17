import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'

function Home({ setShowNavbar, handleClick, showNavbar }) {

  return (
    <div className='home'>
      <h2>JAMBO!</h2>
      <div className='toggle'>
        <i class="fa-solid fa-bars" onClick={handleClick} ></i>
      </div>
      <div className='nav-home'>
        {showNavbar ? <Navbar setShowNavbar={setShowNavbar} /> : null }
      </div>
      <h1>MUNENE'S <br/> DIARY </h1>
      <p>RELAX, BREATH IN BREATH OUT ...NOW TRUST ME WITH YOUR MOOD</p>
      <button className='btn'>SOCIALS &#8594; </button>
      <div className='icons'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}

export default Home
