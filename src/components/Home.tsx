import React from 'react';
import fg_beta_logo from '../assets/fg_beta_logo.png';
import TwitterEmbed from './BioElements/TwitterEmbed';
import Pictorial_HQ_Transparent from '../assets/Pictorial_HQ_Transparent.png'
import { memo } from 'react';
import bioData from "./BioElements/infoPages.json"


const Home: React.FC = () => {
  const pageColor = "#209ad7";
  return (<div>
    <div className='page-background'>

    <div className='content-container'>
    
    <div className='container-row'>
      <div className='container-col-left'
      style={{width:"60%"}}>
        <div className='component-container'
      style={{backgroundColor:pageColor}}>
        <p style={{fontSize:"25px"}}>
        {bioData.Home.HomePageBlurb}
        </p>
        </div>
        <div className='component-container yt'
      style={{backgroundColor:pageColor}}>
        <h1 style={{fontSize:"40px"}}>Latest Video</h1>
        {/* <div className='video-container'></div> */}
        <div className='yt-vid-container'>
<iframe width={"100%"} height={"100%"} style={{marginTop:"10px"}} src="https://www.youtube.com/embed/BDIRQZt4kgw?si=CfOZiofrb-3XaBtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div></div>

      </div>

      <div className='container-col-right'
      style={{width:"40%"}}>
      <div className='component-container'
      style={{backgroundColor:pageColor}}>
        <div className='twitter-container'>
        
      <TwitterEmbed></TwitterEmbed></div></div>

      </div>



    </div>
    
    
    </div></div>

    
  </div>
  );
};

export default memo(Home);
