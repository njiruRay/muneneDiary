import React from 'react';
import './Chronicles.css';
import Navbar from '../Navbar/Navbar';
import { data } from '../Data'

function Chronicles({ setShowNavbar, handleClick, showNavbar }) {

  console.log(data)
  return (
    <div>
      <div className='header'>
        <img src='https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg?w=2000'/>
        <div>
          <h2>MUNENE'S DIARY</h2>
          <p>Podcast</p>
        </div>
        <div className='nav'>
         <i class="fa-solid fa-bars" onClick={handleClick} ></i>
         <div className='nav-chronicles'>
          {showNavbar ? <Navbar setShowNavbar={setShowNavbar} /> : null }
         </div>
       </div>
      </div>
      <input  className='search' type='text' name='search' placeholder='What do you want to listen to?' />
    </div>
  )
}

export default Chronicles
