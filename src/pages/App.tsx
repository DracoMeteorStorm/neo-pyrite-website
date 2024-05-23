import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';

const App: React.FC = () => {
  type page = 'home' | 'draco' | 'mukk' | 'melk' | 'charm' | 'amigo' | 'septic'
  const [currentPage, setCurrentPage] = useState<page>('home') 

  function changeToDraco(): void {
    setCurrentPage('draco')
  }

  return (

    <Router>
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <nav>
        <Link to="/">
          <button className='header-buttons'>
            Home
          </button></Link>
          <a href='\draco'>
          <button className='header-buttons' onClick={changeToDraco}>
            Draco
          </button></a>
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
        <div id="content">
<Routes>
<Route path='/' Component={Home} ></Route>
<Route path='/about' Component={About}></Route>

</Routes>

        </div>
        
      </header>
      <div className='Page-background'>
      
        
        <img className='App-logo' src = {fg_beta_logo}/>
      
    </div>

    <div className='App-footer'>
      <div className='footer-text'>
        hiiiiiiiii
      </div>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
