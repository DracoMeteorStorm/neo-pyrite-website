import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import WeaponComponent from "./WeaponHolder";
import DracoPFP from "../../assets/icons/DracoPFP.jpg"
import MelkPFP from "../../assets/icons/MelkPFP.jpg"
import CharmPFP from "../../assets/icons/CharmPFP.png"
import AmigoPFP from "../../assets/icons/AmigoPFP.png"
import iconSplash from "../../assets/Asset 8.png"
import squid1 from "../../assets/squids/blue_squib.png"
import squid2 from "../../assets/squids/magenta_squib.png"
import squid3 from "../../assets/squids/orange_squib.png"
import squid4 from "../../assets/squids/lime_squib.png"
import squid5 from "../../assets/squids/pink_squib.png"
import squid6 from "../../assets/squids/purple_squib.png"
import squid7 from "../../assets/squids/yellow_squib.png"


const bios: Bios = biosData;

interface IconComponentProps {
    page: keyof Bios;
  }

  const iconMap: { [key: string]: string } = {
    "Draco": DracoPFP,
    "Mukk": "https://pbs.twimg.com/profile_images/1756057323049492480/ZePelDcX_400x400.jpg",
    "Melk": MelkPFP,
    "Charm": CharmPFP,
    "Amigo": AmigoPFP,
    "Septic": "https://pbs.twimg.com/profile_images/1792509533987753984/-eVbou9M_400x400.jpg"

    
  };

  
  
  const IconComponent: React.FC<IconComponentProps> = ({ page }) => {
    const bioData = bios[page];

  if (!bioData) {
    return <p>Bio not found.</p>;
  }
  const randVal = Math.floor(Math.random()* (7) + 1);
  const iconSrc = iconMap[bioData.name];

  const squidMap: { [key:number] : string } = {
    1 : squid1,
    2 : squid2,
    3 : squid3,
    4 : squid4,
    5 : squid5,
    6 : squid6,
    7 : squid7

  }
    
    
    return (

      <div>
        <div className="component-container alt">
            <img src={iconSplash} className="icon-splash"/>
            <img src={iconSrc} className="bio-icon" />

        </div>
        {/* <div className="component-container" style={{backgroundColor:bioData.color}}>

          
        </div> */}
        <div className="component-container" style={{backgroundColor:bioData.color}}>
            {randVal < 4 ?
              <h1 className="player-name">{bioData.name}
              <img src={squidMap[randVal]} height={"75px"} style={{marginLeft:"10px"}}/>
              </h1> : 
              <h1 className="player-name">
              <img src={squidMap[randVal]} height={"75px"} style={{marginRight:"10px"}}/>{bioData.name}
              </h1>
              
              }
            
              
            
          
          <p style={{fontStyle:"italic",padding:"3px"}}>"{bioData.quote}"</p>
          </div>

          <div className="component-container" style={{backgroundColor:bioData.color}}>
            <WeaponComponent page={page}></WeaponComponent>
        </div></div>
);
  };
  
  export default IconComponent;