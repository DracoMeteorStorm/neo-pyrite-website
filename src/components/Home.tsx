import React from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';

const Home: React.FC = () => {
  return (
    <div>
    <div className='page-background'>
      <h1>Home Page</h1>
      <p>fools gold baybeeeeee.</p>
      
      <img src = {fg_beta_logo}/>
      </div>
    <div className='footer'>hiiiiii</div>
    </div>
  );
};

export default Home;
