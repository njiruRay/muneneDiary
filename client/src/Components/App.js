// import logo from './logo.svg';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Chronicles from './Chronicles/Chronicles';
import MentalHealth from './Mental-health/MentalHealth';
import Blog from './Blog/Blog';
import ContactUs from './Contact-us/ContactUs';

function App() {

  const [showNavbar, setShowNavbar] = useState(false)
  
  // Handle icon click
  function handleClick() {
    setShowNavbar(!showNavbar)
  }
  return (
    <div >
      <Routes>
        <Route path='/' exact element={<Home setShowNavbar={setShowNavbar} showNavbar={showNavbar} handleClick={handleClick} />} />
        <Route path='/chronicles' element={<Chronicles setShowNavbar={setShowNavbar} showNavbar={showNavbar} handleClick={handleClick} />} />
        <Route path='/mental-health' exact element={<MentalHealth />} />
        <Route path='/blog' exact element={<Blog />} />
        <Route path='/contact-us' exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
