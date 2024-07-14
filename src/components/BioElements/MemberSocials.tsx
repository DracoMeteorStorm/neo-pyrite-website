import React from 'react';
import { Bios } from './bios';
import biosData from './bios.json';
import TwitterIcon from "../../assets/SocialMedia/twitter.png"
import YoutubeIcon from "../../assets/SocialMedia/youtube.png"
import TwitchIcon from "../../assets/SocialMedia/twitch.png"
import TumblrIcon from "../../assets/SocialMedia/tumblr.png"
import EtsyIcon from "../../assets/SocialMedia/etsy.png"

const bios: Bios = biosData;

interface SocialsComponentProps {
  page: keyof Bios;
}

const socialIcons: {[key:string]:string} = {
"Twitter": TwitterIcon,
"YouTube": YoutubeIcon,
"Twitch": TwitchIcon,
"Etsy": EtsyIcon,
"Tumblr": TumblrIcon


}



const SocialsComponent: React.FC<SocialsComponentProps> = ({ page }) => {
  const bioData = bios[page];


  return (<div>
  
  {bioData.numSocials !== 0 ?
  <div>
    {bioData.socials.map((sm: string[]) => (
      <div className='weapon-container socials'>
      <a href={sm[1]} target='_blank'>
        <img className="socials-icon" src={socialIcons[sm[0]]}/>
        
        </a>
        </div>

    ))}

  </div>:
  
  <div></div>
  }
    </div>
  );
};

export default SocialsComponent;

