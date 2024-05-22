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
    <html lang='en'>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Fool's Gold
              
          {/*  */}
        </h1>
        <div>
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

        </div>
        
      </header>
      <div className='Page-background'>

      <script src="dist/home.js"></script>
        
        <img className='App-logo' src = {fg_beta_logo}/>
        wassup
      
    </div>
<div id="content"></div>
    <div className='App-footer'>
      <div className='footer-text'>
        hiiiiiiiii
      </div>
      
      </div>
    </div>
    </html>
  );
}

export default App;
