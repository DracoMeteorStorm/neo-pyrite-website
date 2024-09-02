import React from 'react';
import fg_beta_logo from '../assets/fg_beta_logo.png';
import TwitterEmbed from './BioElements/TwitterEmbed';
import Pictorial_HQ_Transparent from '../assets/Pictorial_HQ_Transparent.png'
import { memo } from 'react';
import {Route, Link, Routes, HashRouter, useLocation} from 'react-router-dom';
import bioData from "./BioElements/infoPages.json"

const Home: React.FC = () => {
  const pageColor = "#209ad7";
  return (<div>

    
    <div className='container-row'>
      <div className='container-col-left'
      style={{width:"70%"}}>
        <div className='component-container'
      style={{backgroundColor:pageColor, padding:"20px"}}>
        <p className='home-page-blurb' style={{fontSize:"25px"}}>
        {bioData.Home.HomePageBlurb}
        </p>
        </div>
        <div className='component-container'
        style={{overflow:"hidden",backgroundColor:pageColor}}>
          <h1 style={{fontSize:"40px"}}>Fill this out!</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSey-IEo8SjrS4wmUdfix5BgqI0q0P5Z6-qlp5iMmELDG4fM0w/viewform?embedded=true" width="100%" height="500px">Loading…</iframe>
        </div>

        <div className='component-container yt'
      style={{backgroundColor:pageColor}}>
        <h1 style={{fontSize:"40px"}}>Latest Video</h1>
        <div className='yt-vid-container'>
<iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/BDIRQZt4kgw?si=CfOZiofrb-3XaBtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div></div>

      </div>

      <div className='container-col-right'
      style={{width:"30%"}}>
        
        <div className='container-row'>
<div className='container-col-left'
      style={{width:"100%"}}
      >
        <Link to="/draco"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/draco_shirt_1.jpg'/></Link>
        <Link to="/mukk"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/mukk_shirt_1.jpg'/></Link>
        <Link to="/melk"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/melk_shirt_1.jpg'/></Link>
      <Link to="/charm"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/charm_shirt_1.jpg'/></Link>
      
        
        <Link to="/amigo"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/amigo_shirt_1.jpg'/></Link>
        <Link to="/septic"><img className={"shirt-img"} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/septic_shirt_1.jpg'/></Link>
      </div>

</div>
      {/* <div className='component-container'
      style={{backgroundColor:pageColor}}>
        <div className='twitter-container'>
        
      
      </div>
      
      </div> */}

      </div>



    
    
    </div></div>

    
  );
};

export default memo(Home);
