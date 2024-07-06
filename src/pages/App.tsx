import './App.css'
import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/Draco';
import Mukk from '../components/Mukk';
import Melk from '../components/Melk';
import Amigo from '../components/Amigo';
import Charm from '../components/Charm';
import Septic from '../components/Septic';
import FullLogo_HQ_Transparent_Crop from '../assets/FullLogo_HQ_Transparent_Crop.png'
import Twitter_Banner from './assets/Twitter_Banner.jpg'
import YT_Banner from '../assets/YT_Banner.jpg'

const App: React.FC = () => {

  

  return (

    <Router>
    
    <div className='App'>
        <div className='header'>
          {/* <img height='300px' width='300px' src= {FullLogo_HQ_Transparent}/> */}
          <img height='200px' src= {FullLogo_HQ_Transparent_Crop}/>
        <nav>
        <Link to="/">
          <button className='header-buttons'>
            Home
          </button></Link>
          <Link to="/draco">
            <button className='header-buttons'>
            Draco
          </button></Link>
          <Link to="/mukk">
          <button className='header-buttons'>
            Mukk
          </button></Link>
          <Link to="/melk">
          <button className='header-buttons'>
            Melk
          </button></Link>
          <Link to="/charm">
          <button className='header-buttons'>
            Charm
          </button></Link>
          <Link to="/amigo">
          <button className='header-buttons'>
            Amigo
          </button></Link>
          <Link to="/septic">
          <button className='header-buttons'>
            Septic
          </button></Link>
          <Link to="/about"><button className='header-buttons'>
            About
          </button></Link>

        </nav>
        </div>
        <img width='100%' className='static-background' src = {YT_Banner}/>
        
        <div id="content">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/draco' element={<Draco />} />
            <Route path='/mukk' element={<Mukk />} />
            <Route path='/melk' element={<Melk />} />
            <Route path='/charm' element={<Charm />} />
            <Route path='/amigo' element={<Amigo />} />
            <Route path='/septic' element={<Septic />} />
          </Routes>



        </div>
        <div className='footer'>hiiiiiiiii</div>
    
        
        
</div>
        
 
    </Router>
  );
}

export default App;
