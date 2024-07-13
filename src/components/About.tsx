import React from 'react';
import infoPages from "./BioElements/infoPages.json"

const About: React.FC = () => {
  return (
    <div>
    <div className='page-background'>

    <div className='content-container'>
    
    <div className='container-row'>
      <div className='container-col-left'>
        <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>
        <h1 style={{fontSize:"50px"}}>About Us</h1>
        <p style={{margin:"10px",fontSize:"20px"}}>{infoPages.About.AboutUsBlurb}</p>
        </div>

      </div>

      <div className='container-col-right'>
      <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>

        <img width="100%" src='https://storage.googleapis.com/neo-pyrite-site/FoolsGoldBanner.png' style={{borderRadius:"15px"}}/>
        <p style={{fontStyle:"italic"}}>Banner by <a href='https://twitter.com/BUGSSLAP'>Bugslap</a></p>
      </div>

      </div>



    </div>
    
    
    </div></div>

    
  </div>
  );
};

export default About;
