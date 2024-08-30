import React from 'react';
import infoPages from "./BioElements/infoPages.json"
import YTIcon from "../assets/SocialMedia/youtube.png"
import TwitIcon from "../assets/SocialMedia/twitter.png"
import { memo } from 'react';

const About: React.FC = () => {

  const socialIcons: {[key:string]:string} = {
    "Twitter": TwitIcon,
    "YouTube": YTIcon
    
    }

  const socialColors: {[key:string]:string} = {
    "Twitter": "#00ACEE",
    "YouTube": "red"

  }
  return (
    <div>

    
    <div className='container-row'>
      <div className='container-col-left'
      style={{width:"50%"}}
      >
        <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>
        <h1 style={{fontSize:"50px"}}>About Us</h1>
        <p style={{margin:"10px",fontSize:"20px"}}>{infoPages.About.AboutUsBlurb}</p>
        </div>

        <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>

        <img width="100%" src='https://storage.cloud.google.com/neo-pyrite-site/lsl36.png' style={{borderRadius:"15px"}}/>
        <p style={{fontStyle:"italic",marginTop:"10px",fontSize:"20px"}}>Edited by Septic</p>
      </div>

      </div>

      <div className='container-col-right'
      style={{width:"50%"}}
      >
      <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>

        <img width="100%" src='https://storage.cloud.google.com/neo-pyrite-site/FoolsGoldBannerV2.jpg' style={{borderRadius:"15px"}}/>
        <p style={{fontStyle:"italic",marginTop:"10px",fontSize:"20px"}}>Fool's Gold banner by <a href='https://twitter.com/BUGSSLAP'>Bugslap</a></p>
      </div>


      <div className='container-row'>
      <div className='container-col-left'
      style={{width:"50%"}}
      >
        <a href={infoPages.About.SocialMedia[0][1]} style={{width:"auto%"}} target='_blank'><button className='about-container'
          style={{fontSize:"30px", padding:"8px",margin:"4px",justifyContent:"left", fontFamily:"delaGothic",backgroundColor:(socialColors[infoPages.About.SocialMedia[0][0]])}}>
      
          {infoPages.About.SocialMedia[0][0]}

          <img src={socialIcons[infoPages.About.SocialMedia[0][0]]} className='about-icon'/>
        
        </button></a>

      </div>
      <div className='container-col-right'
      style={{width:"50%"}}
      >
<a href={infoPages.About.SocialMedia[1][1]} style={{width:"auto%"}} target='_blank'><button className='about-container'
          style={{fontSize:"30px", padding:"8px",margin:"4px",justifyContent:"left", fontFamily:"delaGothic",backgroundColor:(socialColors[infoPages.About.SocialMedia[1][0]])}}>
      
          {infoPages.About.SocialMedia[1][0]}

          <img src={socialIcons[infoPages.About.SocialMedia[1][0]]} className='about-icon'/>
        
        </button></a>

      

      </div>
      <div className='component-container'      style={{backgroundColor:"#209ad7"}}>
        <div className='container-row'>
<div className='container-col-left'
      style={{width:"100%"}}
      >
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/draco_shirt_1.jpg'/>
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/mukk_shirt_1.jpg'/>
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/melk_shirt_1.jpg'/>
      
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/charm_shirt_1.jpg'/>
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/amigo_shirt_1.jpg'/>
        <img className={"shirt-img"} style={{width:"25%"}} src='https://storage.googleapis.com/neo-pyrite-site/ShirtDesigns/septic_shirt_1.jpg'/>
        <p style={{fontStyle:"italic",marginTop:"10px",fontSize:"20px"}}>Riptide Shirt Designs by Septic</p>
      </div>
      </div>
</div>
      </div>
        




    
    
    </div></div>

    
  </div>
  );
};

export default memo(About);
