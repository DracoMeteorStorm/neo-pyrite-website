import './App.css'
import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Draco from './Draco';
import Mukk from './Mukk';
import Melk from './Melk';
import Amigo from './Amigo';
import Charm from './Charm';
import Septic from './Septic';
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




        </div>
        
        
        
<Routes>
<Route path='/' Component={Home} ></Route>
<Route path='/about' Component={About}></Route>
<Route path='/draco' Component={Draco}></Route>
<Route path='/mukk' Component={Mukk}></Route>
<Route path='/melk' Component={Melk}></Route>
<Route path='/charm' Component={Charm}></Route>
<Route path='/amigo' Component={Amigo}></Route>
<Route path='/septic' Component={Septic}></Route>

</Routes>
</div>
        
 
    </Router>
  );
}

export default App;
