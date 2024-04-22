import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import './App.css';

function App() {
  type page = 'home' | 'draco' | 'mukk' | 'melk' | 'charm' | 'amigo' | 'septic'
  const [currentPage, setCurrentPage] = useState<page>('home') 

  function changeToDraco(): void {
    setCurrentPage('draco')
  }

  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Fool's Gold
              
          {/*  */}
        </h1>
        <div>
          <button className='header-buttons'>
            Draco
          </button>
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
  );
}

export default App;
