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

      </div>

      <div className='container-col-right'
      style={{width:"50%"}}
      >
      <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>

        <img width="100%" src='https://storage.googleapis.com/neo-pyrite-site/FoolsGoldBanner.jpg' style={{borderRadius:"15px"}}/>
        <p style={{fontStyle:"italic",marginTop:"10px",fontSize:"20px"}}>Fool's Gold banner by <a href='https://twitter.com/BUGSSLAP'>Bugslap</a></p>
      </div>

      {/* <div className='component-container'
      style={{backgroundColor:"#209ad7"}}>
        <h1 style={{fontSize:"50px"}}>Socials</h1> */}
        {infoPages.About.SocialMedia.map((sm: string[]) => (
          <a href={sm[1]} style={{width:"auto%"}} target='_blank'><button className='about-container'
          style={{fontSize:"30px", padding:"8px",margin:"4px",justifyContent:"left", fontFamily:"delaGothic",backgroundColor:(socialColors[sm[0]])}}>
      
          {sm[0]}

          <img src={socialIcons[sm[0]]} className='about-icon'/>
        
        </button></a>
        ))}
        {/* </div>       */}




    
    
    </div></div>

    
  </div>
  );
};

export default memo(About);
