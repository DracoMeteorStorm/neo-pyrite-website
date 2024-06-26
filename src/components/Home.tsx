import React from 'react';
import fg_beta_logo from '../assets/fg_beta_logo.png';
import Pictorial_HQ_Transparent from '../assets/Pictorial_HQ_Transparent.png'

const Home: React.FC = () => {
  return (
    <div>
    <div>

    
    <div className='page-background'>

      <h1>Home Page</h1>
      <p>fools gold baybeeeeee.</p>
      
      <img className='App-logo' src = {fg_beta_logo}/>
      </div>
      
      
    
    <div className='footer'>hiiiiii <img src={Pictorial_HQ_Transparent} className='footer-icon'/>
    </div>
</div>
    </div>
  );
};

export default Home;
