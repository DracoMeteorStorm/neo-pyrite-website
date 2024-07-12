import React from 'react';
import { Bios } from './bios';
import biosData from './bios.json';
import TwitterIcon from "../../assets/SocialMedia/twitter.svg"


const bios: Bios = biosData;

interface SocialsComponentProps {
  page: keyof Bios;
}

const socialIcons: {[key:string]:string} = {
"Twitter": TwitterIcon


}



const SocialsComponent: React.FC<SocialsComponentProps> = ({ page }) => {
  const bioData = bios[page];


  return (<div>
  
  {bioData.numSocials !== 0 ?
  <div className='component-container' style={{backgroundColor:bioData.color}}>
    {bioData.socials.map((sm: string[]) => (
      
      <a href={sm[1]} target='_blank'>
        
        {sm[0]}</a>

    ))}

  </div>:
  
  <div></div>
  }
    </div>
  );
};

export default SocialsComponent;

