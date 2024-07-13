import React from 'react';
import fg_beta_logo from '../assets/fg_beta_logo.png';
import TwitterEmbed from './BioElements/TwitterEmbed';
import Pictorial_HQ_Transparent from '../assets/Pictorial_HQ_Transparent.png'

const Home: React.FC = () => {
  const pageColor = "#209ad7";
  return (<div>
    <div className='page-background'>

    <div className='content-container'>
    
    <div className='container-row'>
      <div className='container-col-left'>
        <div className='component-container'
      style={{backgroundColor:pageColor}}>
        fools gold baybeeeeee.
        </div>
        <div className='component-container'
      style={{backgroundColor:pageColor}}>
        <TwitterEmbed></TwitterEmbed>
        </div>

      </div>

      <div className='container-col-right'>
      <div className='component-container'
      style={{backgroundColor:pageColor,height:"32vw"}}>
        <h1 style={{fontSize:"50px"}}>Latest Video</h1>
<iframe width={"100%"} height={"100%"} style={{marginTop:"10px"}} src="https://www.youtube.com/embed/BDIRQZt4kgw?si=CfOZiofrb-3XaBtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      </div>



    </div>
    
    
    </div></div>

    
  </div>
  );
};

export default Home;
