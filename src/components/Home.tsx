import React from 'react';
import fg_beta_logo from '../assets/fg_beta_logo.png';
import Pictorial_HQ_Transparent from '../assets/Pictorial_HQ_Transparent.png'

const Home: React.FC = () => {
  return (<div>
    <div className='page-background'>

    <div className='content-container'>
    
    <div className='container-row'>
      <div className='container-col-left'>
        <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>
        fools gold baybeeeeee.
        </div>

      </div>

      <div className='container-col-right'>
      <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>

        <img src={fg_beta_logo}/>
      </div>

      </div>



    </div>
    
    
    </div></div>

    
  </div>
  );
};

export default Home;
