import './App.css'
import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/DracoPage';

const App: React.FC = () => {

  return (

    <Router>
    
    <div className='App'>
        <div className='App-header'>
        <nav>
        <Link to="/">
          <button className='header-buttons'>
            Home
          </button></Link>
          <Link to="/draco">
            <button className='header-buttons'>
            Draco
          </button></Link>
          <button className='header-buttons'>
            Mukk
          </button>
          <button className='header-buttons'>
            Melk
          </button>
          <button className='header-buttons'>
            Charm
          </button>
          <button className='header-buttons'>
            Amigo
          </button>
          <button className='header-buttons'>
            Septic
          </button>
          <Link to="/about"><button className='header-buttons'>
            About
          </button></Link>

        </nav>
        </div>

      
        
        <div id="content">




        </div>
<Routes>
<Route path='/' Component={Home} ></Route>
<Route path='/about' Component={About}></Route>
<Route path='/draco' Component={Draco}></Route>

</Routes>
</div>
        
 
    </Router>
  );
}

export default App;
